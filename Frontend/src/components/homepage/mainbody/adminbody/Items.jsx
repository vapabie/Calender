function Item({ firstInputName, secondInputName }) {
  return (
    <div>
      <table className="itemTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>{firstInputName}</th>
            <th>{secondInputName}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Item;
