import { useState, useEffect } from "react";

export default function EventsOfDay({ date, userID, isMiniC, urlUser }) {
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
          <li key={event.eventID} style={{ background: event.colorID.hexcode }}>
            {event.eventName}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
