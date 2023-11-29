/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import logo from "../../assets/youtubelogo.svg";
const Navbar = ({ onToggle }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handlefocus = () => {
    setIsFocused(!isFocused);
  };
  const handleBlur = () => {
    setIsFocused(!isFocused);
  };
  const [IsOpen, setIsOpen] = useState(false);
  const handletoggle = () => {
    setIsOpen(!IsOpen);
    onToggle();
  };

  return (
    <div className="container">
      <nav className="navbar-container">
        <div className="navbar-left">
          <button onClick={handletoggle}  className="hamburger-menu">
            <MenuIcon />
          </button>
          <div className="navbar-left-inner">
            <img className="NavbarLogo" src={logo} alt="Youtube Logo" />
            <span>
              YouTube<sup>clone</sup>
            </span>
          </div>
        </div>
        <div className="navbar-middle">
          <form>
            <div className={isFocused ? "form-input1" : "form-input"}>
              <input
                className="navbar-input"
                onFocus={handlefocus}
                onBlur={handleBlur}
                type="text"
                placeholder="Search"
              />
              <div className="cancel-button">
                {isFocused && (
                  <button
                    className="cancel-button"
                  >
                    X
                  </button>
                )}
              </div>
            </div>
            <button className="search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="navbar-right">
          <button>
            <CreateNewFolderIcon sx={{ fontSize: 25 }} />
          </button>
          <button>
            <NotificationsNoneIcon sx={{ fontSize: 25 }} />
          </button>
          <button>
            <AccountCircleIcon fontSize="large" />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
