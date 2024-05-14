import { useState } from "react";

function AddItem({
  onSaveClicked,
  firstOnChange,
  secondOnChange,
  firstInputValue,
  secondInputValue,
  firstInputName,
  secondInputName,
}) {
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
      <button onClick={onSaveClicked}>save</button>
    </div>
  );
}

export default AddItem;
