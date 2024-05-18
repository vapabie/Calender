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

  const deletePath =
    "http://localhost:8080/calendarwebapp/home/admin/rewards/delete/{id}";

  const handleSaveClicked = () => {
    const reward = { rewardName, price: rewardPrice };
    fetch("http://localhost:8080/calendarwebapp/home/admin/rewards/addreward", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reward),
    }).then(() => {
      console.log("New reward added");
      setRewardName("");
      setRewardPrice("");
      onSaveClicked();
      fetchRewards();
    });
  };
  const fetchRewards = () => {
    fetch("http://localhost:8080/calendarwebapp/home/admin/rewards")
      .then((res) => res.json())
      .then((result) => {
        setRewards(result);
      });
  };

  useEffect(() => {
    fetchRewards();
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
        onItemsChange={fetchRewards}
      />
    );
  } else {
    return (
      <Item
        items={rewards}
        itemType={"rewards"}
        firstInputName={firstInputName}
        secondInputName={secondInputName}
        fetchedpath={deletePath}
        onItemsChange={fetchRewards}
      />
    );
  }
}
export default Reward;
