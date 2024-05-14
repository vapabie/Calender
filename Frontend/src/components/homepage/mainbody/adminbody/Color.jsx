import { useState } from "react";
import AddItem from "./AddItem";
import Item from "./Items";

function Color({ isAddClicked, isSaveClicked, onSaveClicked }) {
  const [hexcode, setHexcode] = useState("");
  const [colorName, setColorName] = useState("");
  const hexOnchange = (e) => setHexcode(e.target.value);
  const cnOnChange = (e) => setColorName(e.target.value);

  const handleSaveClicked = (e) => {
    e.preventDefault();
    const color = { hexcode, colorName };
    fetch("http://localhost:8080/calendarwebapp/home/admin/colors/addcolor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(color),
    }).then(() => {
      console.log("New color added");
    });
    onSaveClicked();
  };

  if (isAddClicked && !isSaveClicked) {
    return (
      <AddItem
        onSaveClicked={handleSaveClicked}
        hexOnChange={hexOnchange}
        cnOnChange={cnOnChange}
        hexcode={hexcode}
        colorName={colorName}
      />
    );
  } else {
    return <Item />;
  }
}

export default Color;
