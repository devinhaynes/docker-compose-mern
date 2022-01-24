import { FC } from "react";
import { UserListItem } from "./UserListItem";

interface IUsers {
  first_name: string;
  last_name: string;
  hobbies: string[];
}

export const UserList: FC<{ users: IUsers[] | [] }> = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => {
        return <UserListItem key={`user_${index}`} user={user} />;
      })}
    </ul>
  );
};
