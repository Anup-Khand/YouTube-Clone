import { useDispatch, useSelector } from "react-redux";
import "./ChannelScreen.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getVideosByChannel } from "../../redux/action/videos.action";
import Video from "../../components/Video/Video";
import { getChannelDetails } from "../../redux/action/channel.action";
import numeral from "numeral";
const ChannelScreen = () => {
  const { channelId } = useParams();
  console.log(channelId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

    const { videos, loading } = useSelector((state) => state.channelVideos);
      const { snippet , statistics} = useSelector((state) => state.channelDetails.channel);

  return (
    <>
      <div className="Header">
              <div >
                  <img className="Header-img" src={snippet?.thumbnails?.default?.url} alt="" />
              </div>
              <div className="Header-details">
                  <div className="header-title">{snippet?.title}</div>
                  <div className="extra-detail">
                      {numeral(statistics?.subscriberCount).format('0.a')}<span>  Subscribers</span>
                  </div>
                  <button className="header-btn">Subscribe</button>
              </div>
      </div>
      <div className="sub-video">
        {!loading ? (
          videos?.map((video) => (
            <div key={video.id}>
              <Video video={video} key={video.id} channelscreen />
            </div>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default ChannelScreen;
