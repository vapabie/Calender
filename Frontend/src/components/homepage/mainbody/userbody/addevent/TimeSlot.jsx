import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TimeSlot({
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}) {
  return (
    <div className="timeslot">
      <label> From </label>
      <label>
        <DatePicker
          selected={startDate}
          onChange={onStartDateChange}
          showTimeSelect
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="Pp"
        />
      </label>
      <label> To </label>
      <label>
        <DatePicker
          selected={endDate}
          onChange={onEndDateChange}
          showTimeSelect
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="Pp"
        />
      </label>
    </div>
  );
}
