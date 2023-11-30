import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Video.css";
import numeral from "numeral";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";

import request from "../../api.jsx";
const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: {
        medium: { url },
      },
      contentDetails,
    },
  } = video;
  const _videoId = id?.videoId || contentDetails?.videoId || id;
  const [channelicon, setchannelicon] = useState(null);
  const [views, setviews] = useState(null);
  const [duration, setduration] = useState(null);
  const second = moment.duration(duration).asSeconds();
  const _duration = moment.utc(second * 1000).format("mm:ss");
  useEffect(() => {
    const get_video_detail = async () => {
      try {
        const {
          data: { items },
        } = await request("/videos", {
          params: {
            part: "contentDetails,statistics",
            id: _videoId,
          },
        });

        // Log the result of the API call
        console.log("Video details:", items);

        // Set state based on the API response
        setviews(items[0].statistics.viewCount);
        setduration(items[0].contentDetails.duration);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };
    // console.error(get_video_detail());
    // Call the asynchronous function
    get_video_detail();
  }, [_videoId]);

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

  return (
    <div className="video" key={channelId}>
      <div className="video-top">
        {/* <img src={url} alt="" /> */}
        <LazyLoadImage className="thumbnail" src={url} effect="blur" />
        <span className="__duration">{_duration}</span>
      </div>
      <div className="video-details">
        <div>
          {/* <img className="video-channel-img" src={channelicon?.url} alt="" /> */}
          <LazyLoadImage
            className="video-channel-img"
            src={channelicon?.url}
            effect="blur"
          />
        </div>
        <div className="video-desc">
          <div className="video-title">{title}</div>
          <div className="video-channel">
            <span>{channelTitle}</span>
          </div>
          <div className="video-views">
            <span>
              <FaEye />
              {numeral(views).format("0.a")} Views
            </span>
            •<span>{moment(publishedAt).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
Video.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      channelId: PropTypes.string.isRequired,
      channelTitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      contentDetails: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Video;
