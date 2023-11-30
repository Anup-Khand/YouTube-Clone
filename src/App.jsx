import "./App.css";
import { useState } from "react";
// import Genre from "./components/Genre/Genre";
import Navbar from "./components/Navbar/Navbar";
import Sidbar from "./components/Sidebar/Sidbar";
// import VideoContainer from "./components/VideoContainer/VideoContainer";
import { Routes, Route } from "react-router-dom";
import { WatchScreen } from "./components/WatchScreen/WatchScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
function App() {
  const [istoggle, setIstoggle] = useState(false);

  const handleToggle = () => {
    setIstoggle(!istoggle);
  };
  return (
    <>
      <Navbar onToggle={handleToggle} />
      <div className="wrapper">
        <div className="SidebarWrapper">
          <Sidbar isToggle={istoggle} />
        </div>

        <div className={istoggle?"homescreen1":"homescreen"}>
          <Routes>
            <Route
              path="/"
              element={<HomeScreen />}
              exact
              index
            />
            <Route path="/watchscreen/:id" element={<WatchScreen />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
