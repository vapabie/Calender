function CalenderHeader({ year, month, onNextMonth, onPreviousMonth }) {
  return (
    <table className="cbar">
      <tbody>
        <tr>
          <td className="prevMonthTD">
            <button className=" btn" onClick={onPreviousMonth}>
              &lt;
            </button>
          </td>
          <td className="monthNow">
            {year} {month}
          </td>
          <td className="nextMonthTD">
            <button className="btn" onClick={onNextMonth}>
              &gt;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default CalenderHeader;
