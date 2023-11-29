import { useState } from "react";
import "./Genre.css";
import { useDispatch } from "react-redux";

import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/action/videos.action";
const keywords = [
  "All",
  "React js",
  "Redux",
  "Music",
  "Football",
  "Cricket",
  "Coding",
  "use of API",
  "Hindi Songs",
  "Songs",
  "Anime",
  "Python",
  "Angular js",
  "LifeHacks",
  "Science",
  "Geography",
  "History",
];
const Genre = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="GenreContainer">
      <div className="Genre-detail">
        {keywords.map((value, i) => (
          <span
            className={activeElement === value ? "active" : ""}
            onClick={() => handleClick(value)}
            key={i}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Genre;
