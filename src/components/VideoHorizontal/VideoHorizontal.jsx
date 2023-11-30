import "./VideoHorizontal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import numeral from "numeral";
import moment from "moment";
const VideoHorizontal = () => {
  return (
    <div className="Horizontal-video">
      <div>
        <LazyLoadImage className="Horizontal-video-img" src="" alt="" />
        <span className="Hvideo-duration"></span>
      </div>
      <div className="Horizontal-video-details">
        <div className="Hvideo-title">Title</div>
        <div className="Hvideo-channel-name">channel</div>
        <di className="Hvideo-view">
          <span>{numeral(1000).format("0.a")} Views</span>•
          <span>{moment(2020).fromNow()}</span>
        </di>
      </div>
    </div>
  );
};

export default VideoHorizontal;
