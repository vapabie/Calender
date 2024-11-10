import { useState, useEffect } from "react";
export default function EventItem({
  event,
  urlAdmin,
  setClickedEvent,
  onEventClicked,
}) {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const handleEventClicked = () => {
    setClickedEvent(event);
    onEventClicked();
  };

  useEffect(() => {
    const fetchColor = async () => {
      try {
        const response = await fetch(`${urlAdmin}/colors/${event.colorID}`);

        if (response.ok) {
          const color = await response.json();
          setBgColor(color.hexcode);
        } else {
          console.error("Failed to fetch color");
        }
      } catch (error) {
        console.error("error fetching color: ", error);
      }
    };
    if (event.colorID) {
      fetchColor();
    }
  }, [event.colorID, urlAdmin]);

  return (
    <li
      style={{
        backgroundColor: bgColor,
      }}
      onClick={handleEventClicked}
    >
      {event.eventName}
    </li>
  );
}
