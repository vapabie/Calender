import React, { useState } from "react";
import NavBar from "./homepage/NavBar";
import MainBody from "./homepage/MainBody";

export default function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [screen, setScreen] = useState("");

  const getUser = () => {
    fetch("http://localhost:8080/calendarwebapp/home/users/getuser/", {
      method: "GET",
    });
  };

  const handleAddClicked = () => {
    setIsAddClicked(true);
    setIsSaveClicked(false);
    console.log(isAddClicked);
  };

  const handleSaveClicked = () => {
    setIsSaveClicked(true);
    console.log("event is saved");
    console.log(isSaveClicked);
  };

  const handleSwitchClicked = (screenName) => {
    setScreen(screenName);
    console.log("Switching to screen:", screenName);
  };

  return (
    <div>
      <NavBar
        isAdmin={isAdmin}
        onAddClicked={handleAddClicked}
        onSwitchClicked={handleSwitchClicked}
      />
      <MainBody
        isAdmin={isAdmin}
        isAddClicked={isAddClicked}
        isSaveClicked={isSaveClicked}
        onSaveClicked={handleSaveClicked}
        screen={screen}
      />
    </div>
  );
}
