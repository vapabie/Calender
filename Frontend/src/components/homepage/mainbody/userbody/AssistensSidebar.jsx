import Message from "./assistens/Message";
import { useState, useEffect } from "react";

export default function AssistensSidebar({
  urlAdmin,
  assistentPic = "frog.jpg",
  text,
  setPoints,
  points,
  isMessageEvent,
  setIsMessageEvent,
  clickedEvent,
}) {
  const [rewards, setRewards] = useState([]);
  const [messages, setMessages] = useState([]);
  const [rewardMessage, setRewardMessage] = useState();

  const fetchRewards = () => {
    fetch(urlAdmin + "/rewards")
      .then((res) => res.json())
      .then((result) => {
        console.log("urlAdmin:", urlAdmin);
        console.log("Fetched rewards:", result);

        setRewards(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  useEffect(() => {
    fetchRewards();
  }, []);

  const onBuyButtonClicked = (reward) => {
    if (points >= reward.price) {
      console.log("buy clicked");
      setPoints((prevPoints) => prevPoints - reward.price);
      setRewardMessage(<p>Thank you for the {reward.rewardName}</p>);
    } else {
      console.log("Not enough points");
      setRewardMessage(
        <p>
          You don't have enough point to buy {reward.rewardName}, but thank you
          for the thought!{" "}
        </p>
      );
    }
    setIsMessageEvent(false);
  };

  return (
    <div className="r-side-bar">
      <div className="assistentcon">
        {isMessageEvent ? (
          <Message
            text={text}
            displaybtns={isMessageEvent}
            clickedEvent={clickedEvent}
          />
        ) : (
          <Message text={rewardMessage} displaybtns={isMessageEvent} />
        )}
      </div>
      <div className="rewardcon">
        <table className="reward-table">
          <thead>
            <tr>
              <td>Your points:</td>
              <td>{points}</td>
            </tr>
          </thead>
          <tbody>
            {rewards.map((reward) => (
              <tr key={reward.rewardID}>
                <td>{reward.rewardName}</td>
                <td>{reward.price}</td>
                <td className="buybtncon">
                  <button
                    className="buy-button"
                    onClick={() => onBuyButtonClicked(reward)}
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
