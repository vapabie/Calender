import Color from "./adminbody/Color";
import Priority from "./adminbody/Priority";
import Reward from "./adminbody/Reward";

function AdminBody({ screen, isAddClicked, isSaveClicked, onSaveClicked }) {
  const color = "color";
  const reward = "reward";
  const priority = "priority";
  const screentype = screen;

  switch (screentype) {
    case "color":
      return (
        <Color
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
        />
      );
    case "reward":
      return (
        <Reward
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
        />
      );
    case "priority":
      return (
        <Priority
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
        />
      );
    default:
      return (
        <Color
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
        />
      );
  }
}
export default AdminBody;
