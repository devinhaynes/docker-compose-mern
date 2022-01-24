import { FC } from "react";
import { UserListItem } from "./UserListItem";
import "./UserList.scss";
import { IUser } from "../../types/IUser";

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

export const UserList: FC<{ users: IUser[] | [] }> = ({ users }) => {
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
