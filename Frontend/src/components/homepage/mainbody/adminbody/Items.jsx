function Item({ firstInputName, secondInputName, items }) {
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
          {items.map((color) => (
            <tr key={color.colorID}>
              <td>{color.colorID}</td>
              <td>{color.hexcode}</td>
              <td>{color.colorName}</td>
              <td>
                <button>edit</button>
              </td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Item;
