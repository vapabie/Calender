import { useState } from "react";
import Preview from "./Preview";
import CalenderTable from "./CalenderTable";
import AssistensSidebar from "./AssistensSidebar";

function Calendar() {
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
        <CalenderTable />
      </div>
      <div className="RightSideBar-container">
        <AssistensSidebar />
      </div>
    </div>
  );
}

export default Calendar;
