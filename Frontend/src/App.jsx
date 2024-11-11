import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const url = "http://localhost:8080/calendarwebapp/home/users";
  const [email, setEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [pwagain, setPwAgain] = useState("");
  const [name, setName] = useState("");
  const emailOnChange = (e) => setEmail(e.target.value);
  const userPasswordOnChange = (e) => setUserPassword(e.target.value);
  const pwagainOnchange = (e) => setPwAgain(e.target.value);
  const nameOnChange = (e) => setName(e.target.value);
  const [userc, setUserc] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [userID, setUserID] = useState("");
  const [userPoints, setUserPoints] = useState("");

  const fetchUser = async () => {
    try {
      const response = await fetch(`${url}/${loggedInUser}`);
      if (response.ok) {
        const user = await response.json();
        setIsAdmin(user.disAdmin);
        setName(user.name);
        setUserEvents(user.userEvents);
        setUserID(user.userID);
        setUserPoints(user.points);
      } else {
        console.error("User not found or other error: ", response.status);
      }
    } catch (error) {
      console.error("Error fetching user type: ", error);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      fetchUser().then(() => {
        console.log("isAdmin status after fetch:", isAdmin);
      });
    }
  }, [loggedInUser]);

  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginClicked = () => {
    setIsLogedIn(true);
    setLoggedInUser(email);
    console.log("Login clicked. Setting logged in state and email.");
  };

  const handleSignupClicked = () => {
    const userc = { email, userpassword, name };
    fetch(url + "/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userc),
    }).then(() => {
      console.log("new user added");
      setEmail("");
      setName("");
      setUserPassword("");
    });
  };
  return isLogedIn ? (
    <HomePage
      loggedInUser={loggedInUser}
      url={url}
      isAdmin={isAdmin}
      name={name}
      userID={userID}
      points={userPoints}
      setPoints={setUserPoints}
    />
  ) : (
    <div>
      {showLogin ? (
        <Login
          toggleComponent={toggleComponent}
          loginClicked={handleLoginClicked}
          loginEmail={email}
          loginpassword={userpassword}
          emailOnChange={emailOnChange}
          userPasswordOnChange={userPasswordOnChange}
          url={url}
        />
      ) : (
        <SignUp
          toggleComponent={toggleComponent}
          singupClicked={handleSignupClicked}
          signupEmail={email}
          singupName={name}
          signuppw={userpassword}
          signuppw2={pwagain}
          emailOnChange={emailOnChange}
          nameOnChange={nameOnChange}
          userPasswordOnChange={userPasswordOnChange}
          pwagainOnchange={pwagainOnchange}
        />
      )}
    </div>
  );
}
