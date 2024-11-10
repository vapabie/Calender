import { useState } from "react";
import Preview from "./Preview";
import CalenderTable from "./calendar/CalenderTable";
import AssistensSidebar from "./AssistensSidebar";

function Calendar({ userID, urlUser, urlAdmin, setPoints, points }) {
  const [clickedEvent, setClickedEvent] = useState([]);
  const [message, setMessage] = useState("");

  const eventDetails = () => {
    if (clickedEvent) {
      setMessage(
        <p>
          Here is everything you need to know about {clickedEvent.eventName}. It
          will start at {clickedEvent.startDate} and will end at{" "}
          {clickedEvent.endDate}. The location is at
          {clickedEvent.location}.
        </p>
      );
    }
  };

  return (
    <div className="Body-container">
      <div className="Center-container">
        <CalenderTable
          isMiniC={false}
          userID={userID}
          urlUser={urlUser}
          urlAdmin={urlAdmin}
          setClickedEvent={setClickedEvent}
          onEventClicked={eventDetails}
        />
      </div>
      <div className="RightSideBar-container">
        <AssistensSidebar
          urlAdmin={urlAdmin}
          userID={userID}
          urlUser={urlUser}
          text={message}
          setPoints={setPoints}
          points={points}
        />
      </div>
    </div>
  );
}

export default Calendar;
