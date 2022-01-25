import { useEffect, useState } from "react";
import "./App.css";
import { CreateUserForm } from "./components/CreateUser/CreateUserForm";
import { UserList } from "./components/UserList/UserList";
import { IUser } from "./types/IUser";
import { getAllUsers } from "./service/User/GetAllUsers";

function App() {
  const [users, setUsers] = useState<IUser[] | []>([]);

  useEffect(() => {
    getAllUsers()
      .then((response: any) => {
        if (response) setUsers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      {users && <UserList users={users} />}
      <CreateUserForm />
    </div>
  );
}

export default App;
