import Message from "./assistens/Message";
import { useState, useEffect } from "react";

export default function AssistensSidebar({
  urlAdmin,
  assistentPic = "frog.jpg",
  urlUser,
  userID,
  clickedEvent,
  text,
  setPoints,
  points,
}) {
  const [rewards, setRewards] = useState([]);
  const [messages, setMessages] = useState([]);

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

  const onBuyButtonClicked = (price) => {
    if (points >= price) {
      console.log("buy clicked");
      setPoints(points - price);
    }
  };

  return (
    <div className="r-side-bar">
      <div className="assistentcon">
        <Message text={text} />
      </div>
      <div className="rewardcon">
        <table>
          <thead>Your points: {points} </thead>
          <tbody>
            {rewards.map((reward) => (
              <tr key={reward.rewardID}>
                <td>{reward.rewardName}</td>
                <td>{reward.price}</td>
                <td>
                  <button onClick={onBuyButtonClicked(reward.price)}>
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
