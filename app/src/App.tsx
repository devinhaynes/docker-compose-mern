import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { CreateUserForm } from "./components/CreateUser/CreateUserForm";
import { UserList } from "./components/UserList/UserList";

interface IUsers {
  first_name: string;
  last_name: string;
  hobbies: string[];
}

function App() {
  const [users, setUsers] = useState<IUsers[] | []>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
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
