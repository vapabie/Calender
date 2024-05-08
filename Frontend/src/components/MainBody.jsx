import Item from "./Item";
import Preview from "./Preview";

function MainBody({ isAdmin }) {
  return isAdmin ? (
    <Item />
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

export default MainBody;
