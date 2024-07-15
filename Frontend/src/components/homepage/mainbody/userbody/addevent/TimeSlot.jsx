import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TimeSlot({
  startDate,
  onStartDateChange,
  startTime,
  onStartTimeChange,
  endDate,
  onEndDateChange,
  endTime,
  onEndTimeChange,
}) {
  return (
    <div>
      <label>
        <DatePicker selected={startDate} onChange={onStartDateChange} />
      </label>
      <label>
        <DatePicker
          selected={startTime}
          onChange={onStartTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </label>
      <label>
        <DatePicker
          selected={endTime}
          onChange={onEndTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </label>
      <label>
        <DatePicker selected={endDate} onChange={onEndDateChange} />
      </label>
    </div>
  );
}
