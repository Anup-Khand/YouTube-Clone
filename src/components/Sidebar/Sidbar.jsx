import "./Sider.css";
import { Home, Subscriptions } from "@mui/icons-material";
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
  return (
    <div className="sidebar-container">
      <div className="menu-item1">
        {Listitem.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={isToggle ? "sidebar-button1" : "sidebar-button"}
            activeClassName="active"
          >
            <span>{item.icon} </span>
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr />
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidbar;
