import { useState } from "react";
import Preview from "./Preview";
import CalenderTable from "./calendar/CalenderTable";
import AssistensSidebar from "./AssistensSidebar";

function Calendar() {
  return (
    <div className="Body-container">
      <div className="LeftSideBar-container">
        <div className="MiniCalender-container">
          <CalenderTable isMiniC={true} />
        </div>
        <div className="Preview-container">
          <Preview />
        </div>
      </div>
      <div className="Center-container">
        <CalenderTable isMiniC={false} />
      </div>
      <div className="RightSideBar-container">
        <AssistensSidebar />
      </div>
    </div>
  );
}

export default Calendar;
