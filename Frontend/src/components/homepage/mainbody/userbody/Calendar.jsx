import { useState } from "react";
import Preview from "./Preview";
import CalenderTable from "./calendar/CalenderTable";
import AssistensSidebar from "./AssistensSidebar";

function Calendar({ userID, urlUser, urlAdmin }) {
  return (
    <div className="Body-container">
      <div className="LeftSideBar-container">
        <div className="Preview-container">
          <Preview />
        </div>
      </div>
      <div className="Center-container">
        <CalenderTable isMiniC={false} userID={userID} urlUser={urlUser} />
      </div>
      <div className="RightSideBar-container">
        <AssistensSidebar urlAdmin={urlAdmin} />
      </div>
    </div>
  );
}

export default Calendar;
