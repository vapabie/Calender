import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CalenderTable from "./components/CalenderTable";
import "./App.css";
import Preview from "./components/Preview";

function App() {
  return (
    <div>
      <NavBar />
      <div className="Body-container">
        <div className="LeftSideBar-container">
          <div className="MiniCalender-container">
            <CalenderTable />
          </div>
          <div className="Preview-container">
            <Preview />
          </div>
        </div>
        <div className="Center-container">
          <CalenderTable />
        </div>
        <div className="RightSideBar-container"></div>
      </div>
    </div>
  );
}

export default App;
