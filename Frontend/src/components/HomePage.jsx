import React, { useState } from "react";
import NavBar from "./homepage/NavBar";
import MainBody from "./homepage/MainBody";

function HomePage() {
  const [isAdmin, setIsAdmin] = useState(true);

  const [isAddItemclicked, setIsAddItemClicked] = useState(false);
  const handleAddItemClicked = () => {
    setIsAddItemClicked(true);
  };

  return (
    <div>
      <NavBar isAdmin={isAdmin} onAddItemClicked={handleAddItemClicked} />
      <MainBody isAdmin={isAdmin} isAddItemclicked={isAddItemclicked} />
    </div>
  );
}

export default HomePage;
