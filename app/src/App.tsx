import { useEffect, useState } from "react";
import "./App.css";
import { CreateUserForm } from "./CreateUserForm";

interface IUsers {
  first_name: string;
  last_name: string;
  hobbies: string[];
}

function App() {
  const [users, setUsers] = useState<IUsers[] | []>([]);
  async function createUser() {
    await fetch("http://localhost:3001", {
      method: "POST",
    })
      .then((response) => console.log("We did it"))
      .catch((e) => console.log("Something went wrong"));
  }

  useEffect(() => {
    fetch("http://localhost:3001/users", {
      method: "GET",
    })
      .then((response: any) => {
        return response.json();
      })
      .then((response: any) => {
        console.log(response);
        if (response) setUsers(response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <button onClick={createUser}>Create User</button>
      <ul>
        {(() => {
          if (users && users.length > 0)
            return users.map((user) => {
              return (
                <li>
                  <div>{user.first_name}</div>
                  <div>{user.last_name}</div>
                  <div>{user.hobbies.toString()}</div>
                </li>
              );
            });
        })()}
      </ul>
      <CreateUserForm />
    </div>
  );
}

export default App;
