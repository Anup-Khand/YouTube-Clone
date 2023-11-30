import Comment from "../comment/comment";
import "./Comments.css";
const Comments = () => {
  const handlecomment = () => {};
  return (
    <div className="comments">
      <p>123 Comments</p>
      <div className="comment-contain">
        <img src="../../assets/img.jpg" alt="" />
        <form onSubmit={handlecomment} className="comment-section" action="">
          <input
            type="text"
            className="comment-input"
            placeholder="write a comment"
          />
          <button className="comment-btn">Comment</button>
        </form>
      </div>
      <div className="comment-list">
        {[...Array(10)].map((i) => (
          <Comment key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
