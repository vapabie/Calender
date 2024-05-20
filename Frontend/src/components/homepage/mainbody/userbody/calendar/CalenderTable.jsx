import { useState } from "react";
import CalenderHeader from "./CalenderHeader";
import CalendarDays from "./CalenderDay";

export default function CalenderTable() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const [currentDay, setCurrentDay] = useState(new Date(year, month, 1));

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  const nextMonth = () => {
    setCurrentDay((prevDay) => {
      const nextMonthDate = new Date(
        prevDay.getFullYear(),
        prevDay.getMonth() + 1,
        1
      );
      return nextMonthDate;
    });
  };

  const previousMonth = () => {
    setCurrentDay((prevDay) => {
      const prevMonthDate = new Date(
        prevDay.getFullYear(),
        prevDay.getMonth() - 1,
        1
      );
      return prevMonthDate;
    });
  };

  return (
    <div className="calendar">
      <CalenderHeader
        year={currentDay.getFullYear()}
        month={months[currentDay.getMonth()]}
        onNextMonth={nextMonth}
        onPreviousMonth={previousMonth}
      />
      <div className="calendar-body">
        <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
  );
}
