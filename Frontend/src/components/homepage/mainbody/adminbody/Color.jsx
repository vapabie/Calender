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
  const deletePath =
    "http://localhost:8080/calendarwebapp/home/admin/colors/delete/{id}";

  const handleSaveClicked = () => {
    const color = { hexcode, colorName };
    fetch("http://localhost:8080/calendarwebapp/home/admin/colors/addcolor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(color),
    }).then(() => {
      console.log("New color added");
      setColorName("");
      setHexcode("");
      onSaveClicked();
      fetchColors();
    });
  };

  const fetchColors = () => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/colors")
      .then((res) => res.json())
      .then((result) => {
        setColors(result);
      });
  };

  useEffect(() => {
    fetchColors();
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
      />
    );
  }
}

export default Color;
