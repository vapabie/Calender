export default function DeleteButton({ fetchingPath, itemId, onDelete }) {
  const handleDelete = () => {
    const url = fetchingPath.replace("{id}", itemId);
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("Item deleted");
        onDelete();
      })
      .catch((error) => {
        console.error("Error deleting item: ", error);
      });
  };
  return <button onClick={handleDelete}>Delete</button>;
}
