import { useState, useEffect } from "react";
import Color from "./adminbody/Color";
import Priority from "./adminbody/Priority";
import Reward from "./adminbody/Reward";

export default function AdminBody({
  url,
  screen,
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
}) {
  const color = "color";
  const reward = "reward";
  const priority = "priority";
  const colorHexcode = "Hexcode";
  const colorName = "Color's Name";
  const rewardName = "Reward's Name";
  const rewardPrice = "Reward's Price";
  const priorityName = "Priority's Name";
  const priorityPoints = "Priority Points";
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const editingFalse = (item) => {
    setEditingItem(null);
    setIsEditing(false);
  };

  const editingTrue = (item) => {
    setEditingItem(item);
    setIsEditing(true);
  };

  useEffect(() => {
    console.log("Current screen:", screen);
  }, [screen]);

  switch (screen) {
    case color:
      return (
        <Color
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={colorHexcode}
          secondInputName={colorName}
          url={url + "/colors"}
          isEditing={isEditing}
          editingItem={editingItem}
          editingFalse={editingFalse}
          editingTrue={editingTrue}
        />
      );
    case reward:
      return (
        <Reward
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={rewardName}
          secondInputName={rewardPrice}
          url={url + "/rewards"}
          isEditing={isEditing}
          editingItem={editingItem}
          editingFalse={editingFalse}
          editingTrue={editingTrue}
        />
      );
    case priority:
      return (
        <Priority
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={priorityName}
          secondInputName={priorityPoints}
          url={url + "/prioritys"}
          isEditing={isEditing}
          editingItem={editingItem}
          editingFalse={editingFalse}
          editingTrue={editingTrue}
        />
      );
    default:
      return (
        <Color
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={colorHexcode}
          secondInputName={colorName}
          url={url + "/colors"}
          isEditing={isEditing}
          editingItem={editingItem}
          editingFalse={editingFalse}
          editingTrue={editingTrue}
        />
      );
  }
}
