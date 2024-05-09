import Preview from "./userbody/Preview";

function UserBody() {
  return (
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
