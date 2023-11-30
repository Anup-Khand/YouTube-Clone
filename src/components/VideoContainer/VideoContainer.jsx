import Video from "../Video/Video";
import "../../App.css"
import "./VideoContainer.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/action/videos.action";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonVideo from "../Skeleton/SkeletonVideo";
// import { getPopularVideos } from "../../redux/thunks/thunk.jsx";
// import { getHomeVideo } from "../../redux/reducers/getHomeVideo";
// import {getSearchVideos} from "../../redux/reducers/getSearchVideo";
const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos, loading, error, activeCategory } = useSelector(
    (state) => state.homeVideos
  );

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
  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchData}
      hasMore={true}
      style={{
        overflow: "-moz-hidden-unscrollable",
      }}
    >
      <div className="video-container">
        {!loading
          ? videos.map((videoItem, i) => (
              <div key={i} className="video-wrapper">
                <Video video={videoItem} key={videoItem.id} />
              </div>
            ))
          : [...Array(20)].map((i) => (
              <SkeletonVideo key={i}/>
            ))}
      </div>
    </InfiniteScroll>
  );
};

export default VideoContainer;
