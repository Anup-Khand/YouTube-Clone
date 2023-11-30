import "./Video.MetaData.css";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import numeral from "numeral";
import ShowMoreText from "react-show-more-text";
const VideoMetaData = () => {
  return (
    <div className="videoMetaData">
      <div className="metadata-title">
        <h5>Video Title</h5>
      </div>
      <div className="metadata-details">
        <div className="metadata-channel">
          <div className="meta-channel-img">
            <img className="channel-img" src="../../assets/img.jpg" alt="" />
          </div>
          <div className="meta-channel-detail">
            <div className="meta-channel-name">Channel Name</div>
            <span className="channel-subscriber">
              {" "}
              {numeral(10000).format("0.a")}Subscribers
            </span>
          </div>
          <div className="subscribe">
            <button className="btn">Subscribe</button>
          </div>
        </div>
        <div className="video-button">
          <span>
            <MdThumbUp />
            {numeral(10000).format("0.a")}
          </span>
          <span>
            <MdThumbDown /> {numeral(10000).format("0.a")}
          </span>
        </div>
      </div>
      <div className="metadata-description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="ShowMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dicta
          blanditiis quisquam eligendi repellat! Labore, voluptate atque
          similique doloremque sunt dolor quidem porro iure, ut delectus vero,
          earum ad magnam aperiam maiores hic voluptas itaque! Dolor autem
          laborum in. Quis libero doloribus placeat reiciendis quisquam
          voluptatibus molestiae tempore magni aliquam.
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
