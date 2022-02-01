import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { IUser } from "./types/IUser";
import { getAllUsers } from "./service/User/GetAllUsers";
import { CreateUserFormContainer } from "./components/CreateUser/CreateUserFormContainer";
import Landing from "./components/Landing/Landing";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

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
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UserList users={users} />}>
            <Route path="create" element={<CreateUserFormContainer />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
