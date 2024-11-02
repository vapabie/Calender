import { useState } from "react";
export default function DropDown({
  items,
  setDropDownName,
  dropDownName = "Select an option",
  displayProperty = "name",
  keyProperty = "id",
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("dropdown clicked, is it opened?: " + isDropdownOpen);
  };

  const onDropDownItemClick = (item) => {
    setDropDownName(item);
    setIsDropdownOpen(false);
    console.log(
      "item choosen from drop down, is it opened?: " + isDropdownOpen
    );
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={toggleDropdown}
      >
        {dropDownName}
      </button>
      {isDropdownOpen && (
        <div>
          <ul>
            {items.map((item) => (
              <li
                key={item[keyProperty]}
                onClick={() => onDropDownItemClick(item)}
              >
                <span>{item[displayProperty]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
