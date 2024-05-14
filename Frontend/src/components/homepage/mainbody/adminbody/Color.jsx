import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Item from "./Items";

function Color({
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  firstInputName,
  secondInputName,
}) {
  const [hexcode, setHexcode] = useState("");
  const [colorName, setColorName] = useState("");
  const hexOnchange = (e) => setHexcode(e.target.value);
  const cnOnChange = (e) => setColorName(e.target.value);
  const [colors, setColors] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/colors")
      .then((res) => res.json())
      .then((result) => {
        setColors(result);
      });
  }, []);

  if (isAddClicked && !isSaveClicked) {
    return (
      <AddItem
        onSaveClicked={handleSaveClicked}
        firstOnChange={hexOnchange}
        secondOnChange={cnOnChange}
        firstInputValue={hexcode}
        secondInputValue={colorName}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
      />
    );
  } else {
    return (
      <Item
        items={colors}
        itemType={"colors"}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
      />
    );
  }
}

export default Color;
