// import "./HomeScreen.css";
import './HomeScreen.css'
import Genre from "../../components/Genre/Genre";
import VideoContainer from "../../components/VideoContainer/VideoContainer";

const HomeScreen = () => {
  return (
    <div
      // className={istoggle ? "VideoContainerWrapper1 " : "VideoContainerWrapper "}
      className="VideoContainerWrapper"
    >
      <Genre />
      <VideoContainer />
    </div>
  );
};
export default HomeScreen;
