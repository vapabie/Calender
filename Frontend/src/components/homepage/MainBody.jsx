import AdminBody from "./mainbody/AdminBody";
import UserBody from "./mainbody/UserBody";

function MainBody({
  isAdmin,
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  screen,
  userID,
}) {
  const url = "http://localhost:8080/calendarwebapp/home";
  return isAdmin ? (
    <AdminBody
      isAddClicked={isAddClicked}
      onSaveClicked={onSaveClicked}
      isSaveClicked={isSaveClicked}
      screen={screen}
      url={url + "/admin"}
    />
  ) : (
    <UserBody
      isAddClicked={isAddClicked}
      onSaveClicked={onSaveClicked}
      isSaveClicked={isSaveClicked}
      urlUser={url + "/user"}
      urlAdmin={url + "/admin"}
      userID={userID}
    />
  );
}

export default MainBody;
