function Item() {
  return (
    <div>
      <table className="itemTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Reward</th>
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
