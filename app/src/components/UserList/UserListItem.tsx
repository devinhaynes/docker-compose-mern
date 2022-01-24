import { FC } from "react";

interface IUser {
  first_name: string;
  last_name: string;
  hobbies: string[];
}

export const UserListItem: FC<{ user: IUser }> = ({ user }) => {
  return (
    <li className="UserListItem">
      <div className="UserListItem__name">
        <span>{user.first_name}</span> <span>{user.last_name}</span>
      </div>
      <div className="UserListItem__hobbies">
        <span>Hobbies:</span>
        <ul>
          {user.hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};
