import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./Comments.css";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/action/comments.action";
import PropTypes from "prop-types";
import SingleComment from "../SingleComment/SingleComment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentList.comments);
    const { accessToken } = useSelector((state) => state.auth);
  const { photoURL}  = useSelector((state) => state.auth?.user || {});

  const [text, setText] = useState("");

  const _comments =( comments || [])?.map(
    (comment) => comment.snippet?.topLevelComment?.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }

    dispatch(addComment(videoId, text));
    setText("");
  };

  return (
    <div className="comments">
      <p className="no-of-comments">{totalComments} Comments</p>
      <div className="comment-contain">
        {accessToken ? (
          <img className="comment-user-img" src={photoURL} alt="" />
        ) : (
          <AccountCircleIcon sx={{ fontSize: 50 }} />
        )}

        <form onSubmit={handleComment} className="comment-section" action="">
          <input
            type="text"
            className="comment-input"
            value={text}
            placeholder="write a comment..."
            onChange={(e) => setText(e.target.value)}
          />
          <button className="comment-btn">Comment</button>
        </form>
      </div>
      <div className="comment-List">
        {_comments.map((commentdata, i) => (
          <SingleComment comment={commentdata} key={i} />
        ))}
      </div>
    </div>
  );
};
Comments.propTypes = {
  videoId: PropTypes.string.isRequired,
  totalComments: PropTypes.string.isRequired,
};

export default Comments;
