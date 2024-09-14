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
  userID = 1,
}) {
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("Select a Color");
  const [priority, setPriority] = useState("Select a Priority");
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
      priority,
      isAllDay,
      startDate,
      endDate,
      color,
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
      setColor("Select a Color");
      setPriority("Select a Priority");
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
        color={color}
        setColor={setColor}
        priority={priority}
        setPriority={setPriority}
        startDate={startDate}
        onStartDateChange={onStartDateChange}
        endDate={endDate}
        onEndDateChange={onEndDateChange}
      />
    );
  } else {
    return <Calendar />;
  }
}
export default UserBody;
