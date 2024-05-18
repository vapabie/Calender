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

  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const deletePath =
    "http://localhost:8080/calendarwebapp/home/admin/prioritys/delete/{id}";

  const updatePath =
    "http://localhost:8080/calendarwebapp/home/admin/prioritys/update/";

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
      setEditingItem(null);
      setIsEditing(false);
      fetchPriorities();
      onSaveClicked();
    });
  };

  const handleUpdateClick = () => {
    const priority = { priorityName, priorityPoints };
    fetch(updatePath + editingItem.priorityID, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(priority),
    }).then(() => {
      console.log("Priority Updated");
      setPriorityName("");
      setPriorityPoints("");
      setEditingItem(null);
      setIsEditing(false);
      fetchPriorities();
      onSaveClicked();
    });
  };

  const fetchPriorities = () => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/prioritys")
      .then((res) => res.json())
      .then((result) => {
        setPrioritys(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleEditClick = (item) => {
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    setEditingItem(item);
    setPriorityName(item.priorityName);
    setPriorityPoints(item.priorityPoints);
    setIsEditing(true);
    updatePath.replace("{id}", item.priorityID);
  };

  useEffect(() => {
    fetchPriorities();
  }, []);

  if ((isAddClicked && !isSaveClicked) || isEditing) {
    return (
      <AddItem
        onSaveClicked={isEditing ? handleUpdateClick : handleSaveClicked}
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
        onEditClick={handleEditClick}
      />
    );
  }
}
export default Priority;
