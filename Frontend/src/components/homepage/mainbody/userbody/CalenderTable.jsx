import { Component } from "react";
import CalenderHeader from "./CalenderHeader";
import CalendarDays from "./CalenderDay";

class CalenderTable extends Component {
  constructor() {
    super();

    this.months = [
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
    this.weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    this.state = { currentDay: new Date() };
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };

  nextDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)
      ),
    });
  };

  previousDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)
      ),
    });
  };

  render() {
    return (
      <div className="calendar">
        <CalenderHeader
          year={this.state.currentDay.getFullYear()}
          month={this.months[this.state.currentDay.getMonth()]}
        />
        <div className="calendar-body">
          <CalendarDays
            day={this.state.currentDay}
            changeCurrentDay={this.changeCurrentDay}
          />
        </div>
      </div>
    );
  }
}
export default CalenderTable;
