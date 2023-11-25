import { useState } from "react";
import "./Genre.css";
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
  "History"
];
const Genre = () => {
  const [activeElement, setactiveElement] = useState('All');
  const handleclick = value => {
    setactiveElement(value);
  }
  return (
    <div className="GenreContainer">
      <div className="Genre-detail">
        {keywords.map((value, i) => (
          <span
            className={activeElement === value ? "active" : ""}
            onClick={() => handleclick(value)}
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
