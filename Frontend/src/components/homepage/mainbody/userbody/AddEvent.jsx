import AllDay from "./addevent/AllDay";
import DropDown from "./addevent/DropDown";
import { useState, useEffect } from "react";
import StringInput from "./addevent/StringInput";
import TimeSlot from "./addevent/TimeSlot";

export default function AddEvent({
  onSaveClicked,
  eventName,
  onEventNameChange,
  location,
  onLocationChange,
  selectedColor,
  setSelectedColor,
  selectedPriority,
  setSelectedPriority,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  urlAdmin,
  urlUser,
}) {
  const [colors, setColors] = useState([]);
  const [prioritys, setPrioritys] = useState([]);

  const fetchColors = () => {
    fetch(urlAdmin + "/colors")
      .then((res) => res.json())
      .then((result) => {
        setColors(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const fetchPriorities = () => {
    fetch(urlAdmin + "/prioritys")
      .then((res) => res.json())
      .then((result) => {
        setPrioritys(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchColors();
    fetchPriorities();
  }, []);

  return (
    <div add-event-container>
      <div className="addevent">
        <StringInput
          text={"Title"}
          inputValue={eventName}
          onChange={onEventNameChange}
        />
        <AllDay />
        <TimeSlot
          startDate={startDate}
          onStartDateChange={onStartDateChange}
          endDate={endDate}
          onEndDateChange={onEndDateChange}
        />

        <StringInput
          text={"Location"}
          eventName={location}
          onChange={onLocationChange}
        />

        <DropDown
          items={colors}
          dropDownName={selectedColor.colorName}
          setDropDownName={(color) => setSelectedColor(color)}
          displayProperty="colorName"
          keyProperty="colorID"
        />

        <DropDown
          items={prioritys}
          dropDownName={selectedPriority.priorityName}
          setDropDownName={(priority) => setSelectedPriority(priority)}
          displayProperty="priorityName"
          keyProperty="priorityID"
        />
      </div>
      <div className="addeventsavebtncon">
        <button className="savebutton" onClick={onSaveClicked}>
          save
        </button>
      </div>
    </div>
  );
}
