import "./App.css";
import { useState } from "react";
import Genre from "./components/Genre/Genre";
import Navbar from "./components/Navbar/Navbar";
import Sidbar from "./components/Sidebar/Sidbar";
import VideoContainer from "./components/VideoContainer/VideoContainer";

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

        <div className="VideoContainerWrapper">
          <Genre />
          <VideoContainer />
        </div>
      </div>
    </>
  );
}

export default App;
