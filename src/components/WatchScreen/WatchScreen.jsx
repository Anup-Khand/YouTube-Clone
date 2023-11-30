import Comments from '../Comments/Comments';
import VideoMetaData from '../videoMetaData/VideoMetaData';
import VideoHorizontal from '../VideoHorizontal/VideoHorizontal';
import './WatchScreen.css'

export const WatchScreen = () => {
  return (
    <div className="watch-screen-container">
      <div className="watch-screen-video">
        <div className="watch-screen-player">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            frameBorder="0"
            title='My video'
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments/>
      </div>
      <div className="watch-screen-content">
        {[...Array(10)].map((i) => (<VideoHorizontal key={i} />))}
      </div>
    </div>
  );
}
