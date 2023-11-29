import Video from "../Video/Video";
import "./VideoContainer.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopularVideos } from "../../redux/action/videos.action";

// import { getPopularVideos } from "../../redux/thunks/thunk.jsx";
// import { getHomeVideo } from "../../redux/reducers/getHomeVideo";
// import {getSearchVideos} from "../../redux/reducers/getSearchVideo";
const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.homeVideos);

  useEffect(() => {
    dispatch(getPopularVideos());
    // Dispatch the getHomeVideo thunk when the component mounts
    // dispatch(getHomeVideo());
    //  dispatch(getSearchVideos({ keyword: "All", pageToken: nextPageToken }));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-container">
        <p>Error: {error || "Videos not available"}</p>
      </div>
    );
  }

  return (
    <div className="video-container">
      {videos.map((videoItem, i) => (
        <div key={i} className="video-wrapper">
          <Video video={videoItem} key={videoItem.id} />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
