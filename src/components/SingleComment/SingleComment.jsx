import "./comment.css";
import PropTypes from "prop-types";
import moment from "moment";
import ShowMoreText from 'react-show-more-text'
const SingleComment = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment;
// console.log(comment)
  return (
    <div className="comment-list">
      <img className="comment-img" src={authorProfileImageUrl} alt="" />
      <div className="comment-body">
        <p className="comment-header">
          <span className="tag"> {authorDisplayName}  </span>
          <span>   {moment(publishedAt).fromNow()}</span>
        </p>

        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="ShowMoreText"
          expanded={false}
        >
          {textDisplay}
        </ShowMoreText>
      </div>
    </div>
  );
};
SingleComment.propTypes = {
  comment: PropTypes.shape({
    authorDisplayName: PropTypes.string.isRequired,
    authorProfileImageUrl: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    textDisplay: PropTypes.string.isRequired,
  }).isRequired,
};
export default SingleComment;
