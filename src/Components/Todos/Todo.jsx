function Todo({ todo }) {
  const { title, completed } = todo;

  return (
    <div className="box todo-box">
      <p>Title: {title}</p>
      <p>Completed: {completed === true ? "✅ Yes" : "❌ No"}</p>
    </div>
  );
}
export default Todo;
