import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  const isLogedIn = false;

  const [showLogin, setShowLogin] = useState(true);
  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };

  return isLogedIn ? (
    <div>
      <NavBar />
      <MainBody />
    </div>
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
