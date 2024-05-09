import EventName from "./addevent/EventName";
import AllDay from "./addevent/AllDay";
import DropDown from "./addevent/DropDown";

function AddEvent({ onSaveClicked }) {
  const handleSaveClicked = () => {
    {
      /*save data to the db */
    }
    onSaveClicked();
  };
  return (
    <div>
      <EventName />
      <AllDay />
      <DropDown />
      <DropDown />
      <DropDown />

      <button onClick={handleSaveClicked}>save</button>
    </div>
  );
}

export default AddEvent;
