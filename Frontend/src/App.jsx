import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import Login from "./components/Login";
import "./App.css";

function App() {
  const isLogedIn = false;
  return isLogedIn ? (
    <div>
      <NavBar />
      <MainBody />
    </div>
  ) : (
    <Login />
  );
}

export default App;
