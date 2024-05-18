import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function Item({
  firstInputName,
  secondInputName,
  items,
  itemType,
  fetchedpath,
  onItemsChange,
  onEditClick,
}) {
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
                    <UpdateButton item={item} onEditClick={onEditClick} />
                  </td>
                  <td>
                    <DeleteButton
                      itemId={item.colorID}
                      fetchingPath={fetchedpath}
                      onDelete={onItemsChange}
                    ></DeleteButton>
                  </td>
                </tr>
              )) ||
              (itemType === "rewards" && (
                <tr key={item.rewardID}>
                  <td>{item.rewardID}</td>
                  <td>{item.rewardName}</td>
                  <td>{item.price}</td>
                  <td>
                    <UpdateButton item={item} onEditClick={onEditClick} />
                  </td>
                  <td>
                    <DeleteButton
                      itemId={item.rewardID}
                      fetchingPath={fetchedpath}
                      onDelete={onItemsChange}
                    />
                  </td>
                </tr>
              )) ||
              (itemType === "prioritys" && (
                <tr key={item.priorityID}>
                  <td>{item.priorityID}</td>
                  <td>{item.priorityName}</td>
                  <td>{item.priorityPoints}</td>
                  <td>
                    <UpdateButton item={item} onEditClick={onEditClick} />
                  </td>
                  <td>
                    <DeleteButton
                      itemId={item.priorityID}
                      fetchingPath={fetchedpath}
                      onDelete={onItemsChange}
                    ></DeleteButton>
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
