import { useEffect } from "react";
import Color from "./adminbody/Color";
import Priority from "./adminbody/Priority";
import Reward from "./adminbody/Reward";

function AdminBody({ screen, isAddClicked, isSaveClicked, onSaveClicked }) {
  const color = "color";
  const reward = "reward";
  const priority = "priority";

  const colorHexcode = "Hexcode";
  const colorName = "Color's Name";

  const rewardName = "Reward's Name";
  const rewardPrice = "Reward's Price";

  const priorityName = "Priority's Name";
  const priorityPoints = "Priority Points";

  useEffect(() => {
    console.log("Current screen:", screen);
  }, [screen]);

  switch (screen) {
    case color:
      return (
        <Color
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={colorHexcode}
          secondInputName={colorName}
        />
      );
    case reward:
      return (
        <Reward
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={rewardName}
          secondInputName={rewardPrice}
        />
      );
    case priority:
      return (
        <Priority
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={priorityName}
          secondInputName={priorityPoints}
        />
      );
    default:
      return (
        <Color
          isAddClicked={isAddClicked}
          isSaveClicked={isSaveClicked}
          onSaveClicked={onSaveClicked}
          firstInputName={colorHexcode}
          secondInputName={colorName}
        />
      );
  }
}
export default AdminBody;
