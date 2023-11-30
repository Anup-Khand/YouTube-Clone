// import "./HomeScreen.css";
import '../../App.css'
import Genre from "../../components/Genre/Genre";
import VideoContainer from "../../components/VideoContainer/VideoContainer";

const HomeScreen = () => {
  return (
    <div
      // className={istoggle ? "VideoContainerWrapper1 " : "VideoContainerWrapper "}
      className="VideoConatinerWrapper"
    >
      <Genre />
      <VideoContainer />
    </div>
  );
};
export default HomeScreen;
