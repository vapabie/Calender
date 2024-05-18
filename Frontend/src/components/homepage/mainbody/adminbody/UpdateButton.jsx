export default function UpdateButton({ onEditClick, item }) {
  return <button onClick={() => onEditClick(item)}>Edit</button>;
}
