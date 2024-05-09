import React, { useState } from "react";
import NavBar from "./homepage/NavBar";
import MainBody from "./homepage/MainBody";

function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isSaveClicked, setIsSaveClicked] = useState(false);

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

  return (
    <div>
      <NavBar isAdmin={isAdmin} onAddClicked={handleAddClicked} />
      <MainBody
        isAdmin={isAdmin}
        isAddClicked={isAddClicked}
        isSaveClicked={isSaveClicked}
        onSaveClicked={handleSaveClicked}
      />
    </div>
  );
}

export default HomePage;
