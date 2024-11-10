export default function Message({ text }) {
  return (
    <div className="messagecon">
      <div className="assistpic">pic</div>
      <div className="messagetext">{text}</div>
    </div>
  );
}
