import { FC } from "react";
import axios from "axios";
import { IUser } from "../../types/IUser";

export const UserListItem: FC<{ user: IUser }> = ({ user }) => {
  const removeUser = () => {
    axios
      .delete(`http://localhost:3001/users/${user._id}`)
      .then(() => console.log("Deleted"))
      .catch((e) => console.log(e));
  };
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
        <button onClick={removeUser}>Remove User</button>
      </div>
    </li>
  );
};
