import { FC } from "react";
import { UserListItem } from "./UserListItem";
import "./UserList.scss";

interface IUsers {
  first_name: string;
  last_name: string;
  hobbies: string[];
}

const tempUsers = [
  {
    first_name: "John",
    last_name: "Doe",
    hobbies: ["farming"],
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    hobbies: ["hunting"],
  },
];

export const UserList: FC<{ users: IUsers[] | [] }> = ({ users }) => {
  if (users.length <= 0) {
    users = tempUsers;
  }
  return (
    <div className="UserList">
      <div className="UserList__wrapper">
        <span className="UserList__header">Users</span>
        <ul>
          {users.map((user, index) => {
            return <UserListItem key={`user_${index}`} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
};
