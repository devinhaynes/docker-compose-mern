import { FC, useContext } from "react";
import { Outlet } from "react-router";
import { UserListItem } from "./UserListItem";
import "./UserList.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../state/context/UserContext";

const tempUsers = [
  {
    _id: "1",
    first_name: "John",
    last_name: "Doe",
    hobbies: ["farming"],
  },
  {
    _id: "2",
    first_name: "Jane",
    last_name: "Doe",
    hobbies: ["hunting"],
  },
];

export const UserList: FC = () => {
  const { users } = useContext(UserContext);
  console.log(`Users from UserList: ${JSON.stringify(users)}`);
  const userListUsers = users.length > 0 ? users : tempUsers;
  return (
    <div className="UserList">
      <div className="UserList__wrapper">
        <span className="UserList__header">Users</span>
        <ul>
          {userListUsers.length > 0 &&
            userListUsers.map((user, index) => {
              return <UserListItem key={`user_${index}`} user={user} />;
            })}
        </ul>
        <Link to="/createuser">Create User</Link>
      </div>
      <Outlet />
    </div>
  );
};
