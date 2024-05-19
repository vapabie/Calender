import EventName from "./addevent/EventName";
import AllDay from "./addevent/AllDay";
import DropDown from "./addevent/DropDown";
import { useState, useEffect } from "react";

export default function AddEvent({ onSaveClicked }) {
  const url = "http://localhost:8080/calendarwebapp/home/admin/";
  const [eventName, setEventName] = useState("");
  const [colors, setColors] = useState([]);
  const [prioritys, setPrioritys] = useState([]);
  const [selectedColor, setSelectedColor] = useState("Select a Color");
  const [selectedPriority, setSelectedPriority] = useState("Select a Priority");

  const handleSaveClicked = () => {
    {
      /* todo save data to the db */
    }
    onSaveClicked();
  };

  const fetchColors = () => {
    fetch(url + "colors")
      .then((res) => res.json())
      .then((result) => {
        setColors(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const fetchPriorities = () => {
    fetch(url + "prioritys")
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
      <EventName eventName={eventName} />
      <AllDay />
      <DropDown
        items={colors}
        dropDownName={selectedColor}
        setDropDownName={setSelectedColor}
        displayProperty="colorName"
        keyProperty="colorID"
      />

      <DropDown
        items={prioritys}
        setDropDownName={setSelectedPriority}
        dropDownName={selectedPriority}
        displayProperty="priorityName"
        keyProperty="priorityID"
      />

      <button onClick={handleSaveClicked}>save</button>
    </div>
  );
}
