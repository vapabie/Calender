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
  priority,
  color,
  setColor,
  setPriority,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  urlAdmin,
  urlUser,
}) {
  const [selectedColor, setSelectedColor] = useState("Select a Color");
  const [selectedPriority, setSelectedPriority] = useState("Select a Priority");

  const [colors, setColors] = useState([]);
  const [prioritys, setPrioritys] = useState([]);
  const handleSaveClicked = () => {
    {
      onSaveClicked;
    }
    onSaveClicked();
  };

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
    <div>
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
      <div>
        <DropDown
          items={colors}
          dropDownName={color}
          setDropDownName={setColor}
          displayProperty="colorName"
          keyProperty="colorID"
        />

        <DropDown
          items={prioritys}
          setDropDownName={setPriority}
          dropDownName={priority}
          displayProperty="priorityName"
          keyProperty="priorityID"
        />
      </div>

      <button onClick={handleSaveClicked}>save</button>
    </div>
  );
}
