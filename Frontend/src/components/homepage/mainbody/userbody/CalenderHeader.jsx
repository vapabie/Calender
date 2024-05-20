function CalenderHeader({ year, month }) {
  return (
    <table className="cbar">
      <tbody>
        <tr>
          <td className="prevMonthTD">
            <button className=" btn">&lt;</button>
          </td>
          <td className="monthNow">
            {year} {month}
          </td>
          <td className="nextMonthTD">
            <button className="btn">&gt;</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default CalenderHeader;
