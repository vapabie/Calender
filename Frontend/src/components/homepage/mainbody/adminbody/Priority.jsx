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

  const deletePath =
    "http://localhost:8080/calendarwebapp/home/admin/prioritys/delete/{id}";

  const handleSaveClicked = () => {
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
      setPriorityName("");
      setPriorityPoints("");
      fetchPriorities();
      onSaveClicked();
    });
  };

  const fetchPriorities = () => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/prioritys")
      .then((res) => res.json())
      .then((result) => {
        setPrioritys(result);
      });
  };

  useEffect(() => {
    fetchPriorities();
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
        onItemsChange={fetchPriorities}
      />
    );
  } else {
    return (
      <Item
        items={prioritys}
        itemType={"prioritys"}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
        fetchedpath={deletePath}
        onItemsChange={fetchPriorities}
      />
    );
  }
}
export default Priority;
