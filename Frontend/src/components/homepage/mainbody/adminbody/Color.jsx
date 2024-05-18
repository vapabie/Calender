import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Item from "./Items";

export default function Color({
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
  const [hexcode, setHexcode] = useState("");
  const [colorName, setColorName] = useState("");
  const hexOnchange = (e) => setHexcode(e.target.value);
  const cnOnChange = (e) => setColorName(e.target.value);
  const [colors, setColors] = useState([]);
  const deletePath = url + "colors/delete/";
  const updatePath = url + "colors/update/";
  const addpath = url + "colors/addcolor";

  const handleSaveClicked = () => {
    const color = { hexcode, colorName };
    fetch(addpath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(color),
    }).then(() => {
      console.log("New color added");
      setColorName("");
      setHexcode("");
      onSaveClicked();
      fetchColors();
      editingFalse();
    });
  };

  const handleUpdateClick = () => {
    const color = { hexcode, colorName };
    fetch(updatePath + editingItem.colorID, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(color),
    }).then(() => {
      console.log("Color Updated");
      setColorName("");
      setHexcode("");
      fetchColors();
      onSaveClicked();
      editingFalse();
    });
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

  const handleEditClick = (item) => {
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    editingTrue(item);
    setColorName(item.colorName);
    setHexcode(item.hexcode);
  };

  useEffect(() => {
    fetchColors();
  }, []);

  if ((isAddClicked && !isSaveClicked) || isEditing) {
    return (
      <AddItem
        onSaveClicked={isEditing ? handleUpdateClick : handleSaveClicked}
        firstOnChange={hexOnchange}
        secondOnChange={cnOnChange}
        firstInputValue={hexcode}
        secondInputValue={colorName}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
        onItemsChange={fetchColors}
      />
    );
  } else {
    return (
      <Item
        items={colors}
        itemType={"colors"}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
        fetchedpath={deletePath}
        onItemsChange={fetchColors}
        onEditClick={handleEditClick}
      />
    );
  }
}
