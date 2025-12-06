import { use } from "react";
import Todo from "./Todo";

function Todos({ todosData }) {
  const todos = use(todosData);

  return (
    <div>
      <h1 className="title">Todos Info</h1>
      <div className="todos-container common">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
export default Todos;
