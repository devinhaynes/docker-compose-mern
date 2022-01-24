import { FC } from "react";

interface IUser {
  first_name: string;
  last_name: string;
  hobbies: string[];
}

export const UserListItem: FC<{ user: IUser }> = ({ user }) => {
  return (
    <li>
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.hobbies.toString()}</div>
    </li>
  );
};
