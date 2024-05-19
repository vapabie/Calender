import { useState, useEffect } from "react";
import Item from "./Items";
import AddItem from "./AddItem";

export default function Priority({
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  firstInputName,
  secondInputName,
  url,
  isEditing,
  editingItem,
  editingFalse,
  editingTrue,
}) {
  const [priorityName, setPriorityName] = useState("");
  const [priorityPoints, setPriorityPoints] = useState("");
  const nameOnChange = (e) => setPriorityName(e.target.value);
  const pointsOnChange = (e) => setPriorityPoints(e.target.value);
  const [prioritys, setPrioritys] = useState([]);
  const deletePath = url + "prioritys/delete/";

  const handleSaveClicked = () => {
    const priority = { priorityName, priorityPoints };
    fetch(url + "prioritys/addpriority", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(priority),
    }).then(() => {
      console.log("New priority added");
      setPriorityName("");
      setPriorityPoints("");
      editingFalse();
      fetchPriorities();
      onSaveClicked();
    });
  };

  const handleUpdateClick = () => {
    const priority = { priorityName, priorityPoints };
    fetch(url + "prioritys/update/" + editingItem.priorityID, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(priority),
    }).then(() => {
      console.log("Priority Updated");
      setPriorityName("");
      setPriorityPoints("");
      fetchPriorities();
      onSaveClicked();
      editingFalse();
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

  const handleEditClick = (item) => {
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    editingTrue(item);
    setPriorityName(item.priorityName);
    setPriorityPoints(item.priorityPoints);
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
