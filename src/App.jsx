import "./App.css";
import { useState,useEffect } from "react";
// import Genre from "./components/Genre/Genre";
import Navbar from "./components/Navbar/Navbar";
import Sidbar from "./components/Sidebar/Sidbar";
// import VideoContainer from "./components/VideoContainer/VideoContainer";
import { Routes, Route } from "react-router-dom";
import { WatchScreen } from "./pages/WatchScreen/WatchScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
// import Form from "./components/Form/Form";
// import { useSelector } from "react-redux";
import SearchScreen from "./pages/SearchScreen";
import Subscription from "./pages/Subscription/Subscription";
import ChannelScreen from "./pages/ChannelScreen/ChannelScreen";

import AOS from "aos";
import "aos/dist/aos.css";
 
function App() {
  const [istoggle, setIstoggle] = useState(false);
 useEffect(() => {
   AOS.init();
 }, []);
  // const history = useNavigate();
  const handleToggle = () => {
    setIstoggle(!istoggle);
  };
 
  
  return (
    <>
      <div style={{ width: "100%" }}>
        <Navbar onToggle={handleToggle} />
        <div className="wrapper">
          <div data-aos="fade-right" className="SidebarWrapper">
            <Sidbar isToggle={istoggle} />
          </div>

          <div className={istoggle ? "homescreen1" : "homescreen"}>
            <Routes>
              <Route path="/" element={<HomeScreen />} index />
              <Route path="/search/:query" element={<SearchScreen />} />
              <Route
                path="/watchscreen/:id/:channelId"
                element={<WatchScreen />}
              />
              <Route path="/Subscription" element={<Subscription />} />
              <Route path="/channel/:channelId" element={<ChannelScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
