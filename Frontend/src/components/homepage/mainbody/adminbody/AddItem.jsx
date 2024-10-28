import { useState } from "react";

export default function AddItem({
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
    <table className="addcon">
      <tbody>
        <tr className="firstrow">
          <td>
            <label className="labelf">{firstInputName}</label>
          </td>
          <td>
            <input value={firstInputValue} onChange={firstOnChange} />
          </td>
        </tr>
        <tr className="secondrow">
          <td>
            <label className="labelf">{secondInputName}</label>
          </td>
          <td>
            <input value={secondInputValue} onChange={secondOnChange} />
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="savebtncon">
            <button className="savebutton" onClick={onAddClicked}>
              save
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
