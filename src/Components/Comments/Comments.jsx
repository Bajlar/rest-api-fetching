import { use } from "react";
import CommentInfo from "./CommentInfo";

function Comments({ commentsData }) {
  const comments = use(commentsData);

  return (
    <div>
      <h1 className="title">Comments Info</h1>
      <div className="comments-container common">
        {comments.map((comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
export default Comments;
