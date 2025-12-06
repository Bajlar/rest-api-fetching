import { Suspense } from "react";
import Counter from "../Counter/Counter";
import Users from "../Users/Users";
import Todos from "../Todos/Todos";
import Comments from "../Comments/Comments";

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const fetchData = fetch(usersUrl).then((res) => res.json());

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const fetchTodosData = async () => {
  const res = await fetch(todosUrl);
  return res.json();
};

const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
const fetchDataComments = async () => {
  const res = await fetch(commentsUrl);
  return res.json();
};

function Main() {
  const todosData = fetchTodosData();
  const commentsData = fetchDataComments();

  return (
    <div className="container">
      {/* Counter for count */}
      <Counter />
      <h1 className="heading">React Rest Api Fetching.... </h1>
      {/* Users api fetch */}
      <Suspense
        fallback={<p className="fallback">waiting for loading users data...</p>}
      >
        <Users fetchData={fetchData} />
      </Suspense>
      {/* Todos api fetch */}
      <Suspense
        fallback={<p className="fallback">waiting for loading todos data...</p>}
      >
        <Todos todosData={todosData} />
      </Suspense>
      {/* Comments api fetch */}
      <Suspense
        fallback={
          <p className="fallback">waiting for loading comments data...</p>
        }
      >
        <Comments commentsData={commentsData} />
      </Suspense>
    </div>
  );
}
export default Main;
