import { useState } from "react";

function AddItem({
  onSaveClicked,
  firstOnChange,
  secondOnChange,
  firstInputValue,
  secondInputValue,
  firstInputName,
  secondInputName,
  onItemsChange,
}) {
  const onAddClicked = () => {
    onSaveClicked();
    onItemsChange();
  };
  return (
    <div>
      <div>
        <label>{firstInputName}</label>
        <input value={firstInputValue} onChange={firstOnChange} />
      </div>
      <div>
        <label>{secondInputName}</label>
        <input value={secondInputValue} onChange={secondOnChange} />
      </div>
      <button onClick={onAddClicked}>save</button>
    </div>
  );
}

export default AddItem;
