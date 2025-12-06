function CommentInfo({ comment }) {
  const { name, email, body } = comment;

  return (
    <div className="box comment-info">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>{body}</p>
    </div>
  );
}
export default CommentInfo;
