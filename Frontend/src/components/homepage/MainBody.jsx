import AdminBody from "./mainbody/AdminBody";
import UserBody from "./mainbody/UserBody";

function MainBody({ isAdmin, isAddItemClicked }) {
  return isAdmin ? (
    <AdminBody isAddItemClicked={isAddItemClicked} />
  ) : (
    <UserBody isAddItemClicked={isAddItemClicked} />
  );
}

export default MainBody;
