import EventsOfDay from "./EventsOfDay";

export default function CalendarDays(props) {
  const firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <table className="calendar-table">
      <thead>
        <tr>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <td key={index}>{day}</td>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 7 }).map((_, colIndex) => {
              const index = rowIndex * 7 + colIndex;
              const day = currentDays[index];
              return (
                <td
                  key={colIndex}
                  className={
                    "calendar-day" +
                    (day.isCurrentMonth ? " current" : "") +
                    (day.isSelected ? " selected" : "")
                  }
                  onClick={() => props.changeCurrentDay(day)}
                >
                  {day.number}
                  <EventsOfDay
                    date={day.date}
                    userID={props.userID}
                    isMiniC={props.isMiniC}
                    urlUser={props.urlUser}
                  />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
