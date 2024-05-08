import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./App.css";

function App() {
  const isLogedIn = true;

  const [showLogin, setShowLogin] = useState(true);
  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };

  return isLogedIn ? (
    <HomePage />
  ) : (
    <div>
      {showLogin ? (
        <Login toggleComponent={toggleComponent} />
      ) : (
        <SignUp toggleComponent={toggleComponent} />
      )}
    </div>
  );
}

export default App;
