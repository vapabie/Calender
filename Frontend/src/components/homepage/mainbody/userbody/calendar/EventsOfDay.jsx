import { useState, useEffect } from "react";
import EventItem from "./EventItem";

export default function EventsOfDay({
  date,
  userID,
  isMiniC,
  urlUser,
  urlAdmin,
  setClickedEvent,
  onEventClicked,
}) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${urlUser}/events/${userID}/date?date=${
            date.toISOString().split("T")[0]
          }`
        );
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (date && userID) {
      fetchEvents();
    }
  }, [date, userID]);

  return (
    <div>
      <ul>
        {events.map((event) => (
          <EventItem
            key={event.eventID}
            event={event}
            urlAdmin={urlAdmin}
            setClickedEvent={setClickedEvent}
            onEventClicked={onEventClicked}
          />
        ))}
      </ul>
    </div>
  );
}
