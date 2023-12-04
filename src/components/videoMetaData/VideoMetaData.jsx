import "./Video.MetaData.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import numeral from "numeral";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/action/channel.action";
import ShowMoreText from "react-show-more-text";

const VideoMetaData = ({ video, videoId }) => {
  const { snippet = {}, statistics = {} } = video || {};
  const { channelId, channelTitle, description, title, publishedAt } = snippet || {};
  const { viewCount, likeCount, dislikeCount } = statistics || {};

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails?.channel??{});

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);



  return (
    <div className="videoMetaData">
      <div className="metadata-title">
        <h2>{title}</h2>
      </div>
      <div className="metadata-details">
        <div className="metadata-channel">
          <div className="meta-channel-img">
            <img
              className="channel-img"
              src={channelSnippet?.thumbnails?.default?.url}
              alt=""
            />
          </div>
          <div className="meta-channel-detail">
            <div className="meta-channel-name">{channelTitle}</div>
            <span className="channel-subscriber">
              {numeral(channelStatistics?.subscriberCount).format("0.a")}
              <span> Subscribers</span>
            </span>
          </div>
          <div className="subscribe">
            <button className="btn">
              {subscriptionStatus ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
        <div className="video-button">
          <span>
            <MdThumbUp />
            {numeral(likeCount).format("0.a")}
          </span>
          <span>
            <MdThumbDown /> {numeral(dislikeCount).format("0.a")}
          </span>
        </div>
      </div>
      <div className="metadata-description">
        <div className="meta-channel-views">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>
        </div>
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="ShowMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};
VideoMetaData.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      channelId: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
    }).isRequired,
    statistics: PropTypes.shape({
      viewCount: PropTypes.string.isRequired,
      likeCount: PropTypes.string.isRequired,
      dislikeCount: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  videoId: PropTypes.string.isRequired,
};

export default VideoMetaData;
