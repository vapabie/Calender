import AdminBody from "./mainbody/AdminBody";
import UserBody from "./mainbody/UserBody";

function MainBody({
  isAdmin,
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  screen,
}) {
  return isAdmin ? (
    <AdminBody
      isAddClicked={isAddClicked}
      onSaveClicked={onSaveClicked}
      isSaveClicked={isSaveClicked}
      screen={screen}
    />
  ) : (
    <UserBody
      isAddClicked={isAddClicked}
      onSaveClicked={onSaveClicked}
      isSaveClicked={isSaveClicked}
    />
  );
}

export default MainBody;
