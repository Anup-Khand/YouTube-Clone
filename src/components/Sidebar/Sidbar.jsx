import "./Sider.css";
import {
  Home,
  Subscriptions,
  Whatshot,
  MusicNote,
  SportsCricket,
  History,
  WatchLater,
  Download,
} from "@mui/icons-material";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/action/auth.action";
import { getVideosByCategory } from "../../redux/action/videos.action";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Sidbar = ({ isToggle }) => {
  const Listitem = [
    {
      path: "/",
      name: "Home",
      icon: <Home />,
    },
    {
      path: "/Shorts",
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      path: "/Subscription",
      name: "Subscriptions",
      icon: <Subscriptions />,
    },
  ];
  const Listitem1 = [
    {
      path: "/Trending",
      name: "Trending",
      icon: <Whatshot />,
    },
    {
      path: "/Gaming",
      name: "Gaming",
      icon: <SiYoutubeshorts />,
    },
    {
      path: "/Music",
      name: "Music",
      icon: <MusicNote />,
    },
    {
      path: "/Sport",
      name: "Sport",
      icon: <SportsCricket />,
    },
  ];
  const Listitem2 = [
    {
      path: "/History",
      name: "History",
      icon: <History />,
    },
    {
      path: "/WatchLater",
      name: "Watch Later",
      icon: <WatchLater />,
    },
    {
      path: "/Download",
      name: "Download",
      icon: <Download />,
    },
  ];
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(log_out())
  }
  const[Active,setActive] = useState(null)
  const handlekeyword = (value) => {
    setActive(value)
    dispatch(getVideosByCategory(value));

}

  return (
    <div className="sidebar-container">
      <div className="menu-item">
        {Listitem.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={isToggle ? "sidebar-button1" : "sidebar-button"}
            activeClassName={!Active ? "active" : ""}
          >
            <span>{item.icon} </span>
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr />
      <div className={!isToggle ? "menu-item" : "disable"}>
        <p className="menu-item-title">Explore</p>
        {Listitem1.map((item, i) => (
          <span
            key={i}
            to={item.path}
            className={`${
              Active === item.name
                ? isToggle
                  ? "sidebar-button1 active"
                  : "sidebar-button active"
                : isToggle
                ? "sidebar-button1"
                : "sidebar-button"
            }`}
            onClick={() => handlekeyword(item.name)}
          >
            <span>{item.icon} </span>
            {item.name}
          </span>
        ))}
      </div>
      <hr className={!isToggle ? "" : "disable"} />
      <div className={!isToggle ? "menu-item" : "disable"}>
        <p className="menu-item-title">You</p>
        {Listitem2.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={isToggle ? "sidebar-button1" : "sidebar-button"}
            activeclassname={!Active ? "active" : ""}
          >
            <span>{item.icon} </span>
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr className={!isToggle ? "" : "disable"} />
      <button
        onClick={handleLogOut}
        className={isToggle ? "sidebar-btn1" : "sidebar-btn"}
      >
        <span>
          <MdOutlineLogout />
        </span>
        LOG OUT
      </button>
    </div>
  );
};

export default Sidbar;
