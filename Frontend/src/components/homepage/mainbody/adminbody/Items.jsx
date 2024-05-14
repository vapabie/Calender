function Item({ firstInputName, secondInputName, items, itemType }) {
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
          {items.map(
            (item) =>
              (itemType === "colors" && (
                <tr key={item.colorID}>
                  <td>{item.colorID}</td>
                  <td>{item.hexcode}</td>
                  <td>{item.colorName}</td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              )) ||
              (itemType === "rewards" && (
                <tr key={item.rewardID}>
                  <td>{item.rewardID}</td>
                  <td>{item.rewardName}</td>
                  <td>{item.price}</td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              )) ||
              (itemType === "prioritys" && (
                <tr key={item.priorityID}>
                  <td>{item.priorityID}</td>
                  <td>{item.priorityName}</td>
                  <td>{item.priorityPoints}</td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button>delete</button>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Item;