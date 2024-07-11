import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Item from "./Items";

export default function Reward({
  isAddClicked,
  isSaveClicked,
  onSaveClicked,
  firstInputName,
  secondInputName,
  url,
  isEditing,
  editingItem,
  editingFalse,
  editingTrue,
}) {
  const [rewardName, setRewardName] = useState("");
  const [rewardPrice, setRewardPrice] = useState("");
  const nameOnChange = (e) => setRewardName(e.target.value);
  const priceOnChange = (e) => setRewardPrice(e.target.value);
  const [rewards, setRewards] = useState([]);

  const handleSaveClicked = () => {
    const reward = { rewardName, price: rewardPrice };
    fetch(url + "/addreward", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reward),
    }).then(() => {
      console.log("New reward added");
      setRewardName("");
      setRewardPrice("");
      onSaveClicked();
      fetchRewards();
      editingFalse();
    });
  };

  const handleUpdateClick = () => {
    const reward = { rewardName, price: rewardPrice };
    fetch(url + "/update/" + editingItem.rewardID, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reward),
    }).then(() => {
      console.log("Reward Updated");
      setPriorityName("");
      setPriorityPoints("");
      fetchPriorities();
      onSaveClicked();
      editingFalse();
    });
  };

  const fetchRewards = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setRewards(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleEditClick = (item) => {
    if (!item) {
      console.error("Item is undefined");
      return;
    }
    editingTrue(item);
    setRewardName(item.rewardName);
    setRewardPrice(item.price);
  };

  useEffect(() => {
    fetchRewards();
  }, []);

  if ((isAddClicked && !isSaveClicked) || isEditing) {
    return (
      <AddItem
        onSaveClicked={isEditing ? handleUpdateClick : handleSaveClicked}
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
        fetchedpath={url + "/delete/"}
        onItemsChange={fetchRewards}
        onEditClick={handleEditClick}
      />
    );
  }
}
