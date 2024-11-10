import React, { useState, useEffect } from "react";
import Calendar from "./userbody/Calendar";
import AddEvent from "./userbody/AddEvent";

function UserBody({
  urlUser,
  urlAdmin,
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  isAllDay = false,
  userID,
}) {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedColor, setSelectedColor] = useState({
    colorID: "",
    colorName: "Select a Color",
  }); // Updated to store object
  const [selectedPriority, setSelectedPriority] = useState({
    priorityID: "",
    priorityName: "Select a Priority",
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onEventNameChange = (e) => setEventName(e.target.value);
  const onLocationChange = (e) => setLocation(e.target.value);
  const onStartDateChange = (e) => setStartDate(e);
  const onEndDateChange = (e) => setEndDate(e);

  const handleSaveClicked = () => {
    const event = {
      userID,
      eventName,
      location,
      priorityID: selectedPriority.priorityID,
      isAllDay,
      startDate,
      endDate,
      colorID: selectedColor.colorID,
    };
    fetch(urlUser + "/events/addevent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).then(() => {
      console.log("New Event adedd");
      setEventName("");
      setLocation("");
      setStartDate();
      setEndDate();
      setSelectedColor({ colorID: "", colorName: "Select a Color" });
      setSelectedPriority({
        priorityID: "",
        priorityName: "Select a Priority",
      });
      onSaveClicked();
    });
  };

  if (isAddClicked && !isSaveClicked) {
    return (
      <AddEvent
        urlUser={urlUser}
        urlAdmin={urlAdmin}
        onSaveClicked={handleSaveClicked}
        eventName={eventName}
        onEventNameChange={onEventNameChange}
        location={location}
        onLocationChange={onLocationChange}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedPriority={selectedPriority}
        setSelectedPriority={setSelectedPriority}
        startDate={startDate}
        onStartDateChange={onStartDateChange}
        endDate={endDate}
        onEndDateChange={onEndDateChange}
      />
    );
  } else {
    return <Calendar userID={userID} urlUser={urlUser} urlAdmin={urlAdmin} />;
  }
}
export default UserBody;
