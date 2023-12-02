import "./VideoHorizontal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import numeral from "numeral";
import moment from "moment";
import { useEffect, useState } from "react";
import request from "../../api";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const VideoHorizontal = ({ video, searchScreen, subscreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      description,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
    contentDetails: {
      videoId
    }={}
  } = video;
  console.log("from vh",video)

  const isVideo = !(id.kind === "youtube#channel" || subscreen);
  const [channelicon, setchannelicon] = useState(null);
  const [views, setviews] = useState(null);
  const [duration, setduration] = useState(null);

  useEffect(() => {
    const get_video_detail = async () => {
      try {
        const {
          data: { items },
        } = await request("/videos", {
          params: {
            part: "contentDetails,statistics",
            id: id.videoId || videoId ,
          },
        });
        // Set state based on the API response
        setviews(items[0].statistics.viewCount);
        setduration(items[0].contentDetails.duration);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };
    if (isVideo) {
      get_video_detail();
    }
  }, [id.videoId,videoId, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setchannelicon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
    // console.error(get_channel_icon());
  }, [channelId]);

  const second = moment.duration(duration).asSeconds();
  const _duration = moment.utc(second * 1000).format("mm:ss");
  const navigate = useNavigate();
  const _channelId = resourceId?.channelId || channelId;

  const handleChannelClick = () => {
    isVideo
      ? navigate(`/watchscreen/${id.videoId|| videoId}/${channelId}`)
      : navigate(`/channel/${_channelId}`);
  };

  return (
    <div
      onClick={handleChannelClick}
      className={(searchScreen || subscreen) ? "Horizontal-video" : "Horizontal-video1"}
    >
      <div className="channel-thumbnail">
        <LazyLoadImage
          id={subscreen ? "#sub-img" : ""}
          className={isVideo ? "Horizontal-video-img" : "Horizontal-video-img1"}
          src={medium?.url}
          alt="Channel Thumbnail"
        />
        {isVideo && <span className="Hvideo-duration">{_duration}</span>}
      </div>
      <div className="Horizontal-video-details">
        <div className={isVideo ? "Hvideo-title" : "Hvideo-title1"}>
          {title}
        </div>
        {isVideo && (
          <div className="Hvideo-view">
            <span>{numeral(views).format("0.a")} Views</span> •
            <span> {moment(publishedAt).fromNow()}</span>
          </div>
        )}
        <div className="Hvideo-channel-name">
          {isVideo && (
            <LazyLoadImage
              className="Hvideo-channel-img"
              src={channelicon?.url}
              effect="blur"
            />
          )}
          <p>{channelTitle}</p>
        </div>

        {(searchScreen || subscreen) && (
          <p className="Channel-description">{description}</p>
        )}
        {subscreen && (
          <p className="channel-count">
            {video.contentDetails.totalItemCount}
            <span> Videos</span>
          </p>
        )}
      </div>
    </div>
  );
};

VideoHorizontal.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      channelId: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      resourceId: PropTypes.shape({
        channelId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    contentDetails: PropTypes.shape({
      videoId:PropTypes.string.isRequired,
      totalItemCount: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  searchScreen: PropTypes.bool.isRequired,
  subscreen: PropTypes.bool.isRequired,
};

export default VideoHorizontal;
