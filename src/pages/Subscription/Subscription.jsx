import "./Subscription.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSubscribedChannels } from "../../redux/action/videos.action";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";

const Subscription = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );
  console.log("subscription", videos);
  return (
    <div>
      {!loading ? (
        videos.map((video) => (
          <VideoHorizontal video={video} key={video.id} subscreen />
        ))
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};

export default Subscription;
