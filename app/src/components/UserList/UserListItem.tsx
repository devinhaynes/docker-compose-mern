import { FC } from "react";
import { IUser } from "../../types/IUser";
import { deleteUser } from "../../service/User/DeleteUser";

export const UserListItem: FC<{ user: IUser }> = ({ user }) => {
  const removeUser = () => {
    deleteUser(user._id)
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
