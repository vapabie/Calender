import AdminBody from "./mainbody/AdminBody";
import UserBody from "./mainbody/UserBody";

function MainBody({ isAdmin, isAddClicked, isSaveClicked, onSaveClicked }) {
  return isAdmin ? (
    <AdminBody isAddClicked={isAddClicked} />
  ) : (
    <UserBody
      isAddClicked={isAddClicked}
      onSaveClicked={onSaveClicked}
      isSaveClicked={isSaveClicked}
    />
  );
}

export default MainBody;
