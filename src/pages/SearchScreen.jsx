import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../redux/action/videos.action";
import VideoHorizontal from "../components/VideoHorizontal/VideoHorizontal";

const SearchScreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  console.log(query);
  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

    const { videos, loading } = useSelector((state) => state.searchedVideos);
    console.log(videos)
    return <div>
        {
            !loading ?( videos.map((video) => (
                <VideoHorizontal video={video} key={video.id.videoId} searchScreen/>
            ))): <h1>Loading</h1>
      }
  </div>;
};

export default SearchScreen;
