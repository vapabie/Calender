import UpdateButton from "../../adminbody/UpdateButton";
import DeleteButton from "../../adminbody/DeleteButton";

export default function Message({
  displaybtns,
  text = "Hi! what would you like to know?",
  clickedEvent,
}) {
  return (
    <div className="messagecon">
      <img src="cat.jpg" alt="assistant avatar" className="assistantAvatar" />
      <div className="messagetext">
        <div>{text}</div>
        {displaybtns ? (
          <div className="eventbtn">
            <UpdateButton item={clickedEvent} />
            <DeleteButton itemId={clickedEvent} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
