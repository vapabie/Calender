function CalenderTable() {
  const CurrentYear = 2012;
  const CurrentMonth = "January";

  return (
    <div className="calTab">
      <table className="cbar">
        <tbody>
          <tr>
            <td className="prevMonthTD">
              <button className=" btn">&lt;</button>
            </td>
            <td className="monthNow">
              {CurrentMonth} {CurrentYear}
            </td>
            <td className="nextMonthTD">
              <button className="btn">&gt;</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="weekdays">
        <thead>
          <tr>
            <th>M</th>
            <th>Tu</th>
            <th>W</th>
            <th>Th</th>
            <th>F</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
export default CalenderTable;
