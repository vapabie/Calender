import { useState } from "react";

function AddItem({
  onSaveClicked,
  hexOnChange,
  cnOnChange,
  hexcode,
  colorName,
}) {
  return (
    <div>
      <div>
        <label>hexcode</label>
        <input value={hexcode} onChange={hexOnChange} />
      </div>
      <div>
        <label>name</label>
        <input value={colorName} onChange={cnOnChange} />
      </div>
      <button onClick={onSaveClicked}>save</button>
    </div>
  );
}

export default AddItem;
