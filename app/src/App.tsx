import { useEffect, useReducer, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Components
import { UserList } from "./components/UserList/UserList";
import { CreateUserFormContainer } from "./components/CreateUser/CreateUserFormContainer";
import { Landing } from "./components/Landing/Landing";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Alert } from "./components/Alert/Alert";

// Services
import { getAllUsers } from "./service/User/GetAllUsers";

// State Management
import { defaultAlert, AlertContext } from "./state/context/AlertContext";
import { AlertReducer } from "./state/reducers/AlertReducer";
import { ErrorReducer } from "./state/reducers/ErrorReducer";
import { defaultError, ErrorContext } from "./state/context/ErrorContext";
import { UserReducer } from "./state/reducers/UserReducer";
import { UserContext } from "./state/context/UserContext";

function App() {
  const [users, dispatchUsers] = useReducer(UserReducer, []);
  const [alert, dispatchAlert] = useReducer(AlertReducer, defaultAlert);
  const [error, dispatchError] = useReducer(ErrorReducer, defaultError);

  useEffect(() => {
    getAllUsers()
      .then((response: any) => {
        console.log(JSON.stringify(response.data));
        if (response)
          dispatchUsers({
            type: "SET_USERS",
            payload: { multipleUsers: response.data },
          });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ users, dispatchUsers }}>
        <AlertContext.Provider value={{ alert, dispatchAlert }}>
          <ErrorContext.Provider value={{ error, dispatchError }}>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<UserList />} />
                <Route
                  path="/createuser"
                  element={<CreateUserFormContainer />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
              {alert.type && (
                <Alert type={alert.type} message={alert.message} />
              )}
              <button
                onClick={() =>
                  dispatchAlert({
                    type: "SET_ALERT",
                    payload: { type: "error", message: "Error message" },
                  })
                }
              >
                Send alert
              </button>
              <button
                onClick={() =>
                  dispatchError({
                    type: "SET_ERROR",
                    payload: { type: "local", message: "Error message" },
                  })
                }
              >
                Send error
              </button>
            </Router>
          </ErrorContext.Provider>
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
