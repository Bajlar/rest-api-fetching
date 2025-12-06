import { use } from "react";
import User from "./User";

function Users({ fetchData }) {
  const users = use(fetchData);

  return (
    <div>
      <h1 className="title">Users Info</h1>
      <div className="users-container common">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
export default Users;
