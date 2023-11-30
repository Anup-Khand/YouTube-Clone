import "./comment.css";
import moment from 'moment'
const Comment = () => {
    return (
      <div className="comment-list">
        <img src="../../assets/img.jpg" alt="" />
        <div className="commemt-body">
          <p className="comment-header">
            Header
            {moment("2020-09-09").fromNow()}
                </p>
                <p>
                    Nice Video
                </p>
        </div>
      </div>
    );
};

export default Comment;
