import "./App.css";
import { useState } from "react";
import Genre from "./components/Genre/Genre";
import Navbar from "./components/Navbar/Navbar";
import Sidbar from "./components/Sidebar/Sidbar";
import VideoContainer from "./components/VideoContainer/VideoContainer";
import { Routes, Route } from "react-router-dom";
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

        <div
          className={
            istoggle ? "VideoContainerWrapper1" : "VideoContainerWrapper"
          }
        >
          <Genre />

          <Routes>
            <Route path="/" element={<VideoContainer />} exaxt index />
            <Route path="/search" element={<h1>Search Result</h1>} />
            <Route/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
