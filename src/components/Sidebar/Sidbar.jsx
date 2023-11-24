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
import { NavLink } from "react-router-dom";
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
      path: "/Subcription",
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
  return (
    <div className="sidebar-container">
      <div className="menu-item">
        {Listitem.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={isToggle ? "sidebar-button1" : "sidebar-button"}
            activeclassname="active"
          >
            <span>{item.icon} </span>
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr />
      <div className="menu-item">
        <p className="menu-item-title">Explore</p>
        {Listitem1.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={isToggle ? "sidebar-button1" : "sidebar-button"}
            activeclassname="active"
          >
            <span>{item.icon} </span>
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr/>
      <div className="menu-item">
        <p className="menu-item-title">You</p>
        {Listitem2.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={isToggle ? "sidebar-button1" : "sidebar-button"}
            activeclassname="active"
          >
            <span>{item.icon} </span>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidbar;
