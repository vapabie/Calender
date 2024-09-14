import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const isLogedIn = true;

const toggleComponent = () => {
  const [showLogin, setShowLogin] = useState(true);
  setShowLogin(!showLogin);
};

export default function App() {
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
