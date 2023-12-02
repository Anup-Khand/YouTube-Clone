import Comments from "../../components/Comments/Comments";
import { useParams } from "react-router-dom";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import "./WatchScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/action/videos.action";

export const WatchScreen = () => {
  const { id,channelId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    console.log("WatchScreen useEffect triggered");

    dispatch(getRelatedVideos(channelId));
  }, [dispatch,channelId]);

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideo
  );
  // {
  //   console.log(videos);
  // }

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <div className="watch-screen-container">
      <div className="watch-screen-video">
        <div className="watch-screen-player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading ...</h6>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </div>
      <div className="watch-screen-content">
        {!relatedVideosLoading &&
          videos
            ?.filter((video) => video.snippet)
            .map((video) => {
              console.log("Video in VideoHorizontal:", video);
             return <VideoHorizontal video={video} key={video.id.videoId} relatevideo />;
            })}
      </div>
    </div>
  );
};
