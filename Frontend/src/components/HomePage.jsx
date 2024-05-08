import React, { useState } from "react";
import NavBar from "./NavBar";
import MainBody from "./MainBody";

function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      <NavBar isAdmin={isAdmin} />
      <MainBody isAdmin={isAdmin} />
    </div>
  );
}

export default HomePage;
