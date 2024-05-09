import React, { useState } from "react";
import NavBar from "./homepage/NavBar";
import MainBody from "./homepage/MainBody";

function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [isAddItemClicked, setIsAddItemClicked] = useState(false);
  const handleAddItemClicked = () => {
    setIsAddItemClicked(true);
    console.log(isAddItemClicked);
  };

  return (
    <div>
      <NavBar isAdmin={isAdmin} onAddItemClicked={handleAddItemClicked} />
      <MainBody isAdmin={isAdmin} isAddItemClicked={isAddItemClicked} />
    </div>
  );
}

export default HomePage;
