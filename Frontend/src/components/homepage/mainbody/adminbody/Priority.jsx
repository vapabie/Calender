import { useState, useEffect } from "react";
import Item from "./Items";
import AddItem from "./AddItem";

function Priority({
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  firstInputName,
  secondInputName,
}) {
  const [priorityName, setPriorityName] = useState("");
  const [priorityPoints, setPriorityPoints] = useState("");
  const nameOnChange = (e) => setPriorityName(e.target.value);
  const pointsOnChange = (e) => setPriorityPoints(e.target.value);
  const [prioritys, setPrioritys] = useState([]);

  const handleSaveClicked = (e) => {
    e.preventDefault();
    const priority = { priorityName, priorityPoints };
    fetch(
      "http://localhost:8080/calendarwebapp/home/admin/prioritys/addpriority",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(priority),
      }
    ).then(() => {
      console.log("New priority added");
    });
    onSaveClicked();
  };

  useEffect(() => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/prioritys")
      .then((res) => res.json())
      .then((result) => {
        setPrioritys(result);
      });
  }, []);

  if (isAddClicked && !isSaveClicked) {
    return (
      <AddItem
        onSaveClicked={handleSaveClicked}
        firstOnChange={nameOnChange}
        secondOnChange={pointsOnChange}
        firstInputValue={priorityName}
        secondInputValue={priorityPoints}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
      />
    );
  } else {
    return (
      <Item
        items={prioritys}
        itemType={"prioritys"}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
      />
    );
  }
}
export default Priority;
