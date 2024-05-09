import Preview from "./userbody/Preview";
import AddEvent from "./userbody/AddEvent";

function UserBody({ isAddItemClicked }) {
  return isAddItemClicked ? (
    <AddEvent />
  ) : (
    <div className="Body-container">
      <div className="LeftSideBar-container">
        <div className="MiniCalender-container">
          {/*
          <CalenderTable />
          */}
        </div>
        <div className="Preview-container">
          <Preview />
        </div>
      </div>
      <div className="Center-container">
        {/*
          <CalenderTable />
        */}
      </div>
      <div className="RightSideBar-container"></div>
    </div>
  );
}

export default UserBody;
