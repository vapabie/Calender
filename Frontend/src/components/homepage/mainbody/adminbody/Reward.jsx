import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Item from "./Items";

function Reward({
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  firstInputName,
  secondInputName,
}) {
  const [rewardName, setRewardName] = useState("");
  const [rewardPrice, setRewardPrice] = useState("");
  const nameOnChange = (e) => setRewardName(e.target.value);
  const priceOnChange = (e) => setRewardPrice(e.target.value);
  const [rewards, setRewards] = useState([]);

  const handleSaveClicked = (e) => {
    e.preventDefault();
    const reward = { rewardName, rewardPrice };
    fetch("http://localhost:8080/calendarwebapp/home/admin/rewards/addreward", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reward),
    }).then(() => {
      console.log("New reward added");
    });
    onSaveClicked();
  };

  useEffect(() => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/rewards")
      .then((res) => res.json())
      .then((result) => {
        setRewards(result);
      });
  }, []);

  if (isAddClicked && !isSaveClicked) {
    return (
      <AddItem
        onSaveClicked={handleSaveClicked}
        firstOnChange={nameOnChange}
        secondOnChange={priceOnChange}
        firstInputValue={rewardName}
        secondInputValue={rewardPrice}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
      />
    );
  } else {
    return (
      <Item
        items={rewards}
        itemType={"rewards"}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
      />
    );
  }
}
export default Reward;
