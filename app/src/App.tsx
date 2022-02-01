import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { IUser } from "./types/IUser";
import { IAlert } from "./types/IAlert";
import { getAllUsers } from "./service/User/GetAllUsers";
import { CreateUserFormContainer } from "./components/CreateUser/CreateUserFormContainer";
import Landing from "./components/Landing/Landing";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { Alert } from "./components/Alert/Alert";

const defaultAlert: IAlert = { type: null, message: "" };

export const AlertContext = createContext<{
  alert: IAlert;
  dispatch: Dispatch<any>;
}>({
  alert: defaultAlert,
  dispatch: () => null,
});

type AlertAction = "SET_ALERT" | "REMOVE_ALERT";

const AlertReducer = (
  state: IAlert,
  action: { type: AlertAction; payload: IAlert }
): IAlert => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message,
      };
    case "REMOVE_ALERT":
      return defaultAlert;
    default:
      return state;
  }
};

function App() {
  const [users, setUsers] = useState<IUser[] | []>([]);
  // const [alert, setAlert] = useState<IAlert>(defaultAlert);
  const [alert, dispatch] = useReducer(AlertReducer, defaultAlert);

  useEffect(() => {
    getAllUsers()
      .then((response: any) => {
        if (response) setUsers(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <AlertContext.Provider value={{ alert, dispatch }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<UserList users={users} />} />
            <Route path="/createuser" element={<CreateUserFormContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {alert.type && <Alert type={alert.type} message={alert.message} />}
          <button
            onClick={() =>
              dispatch({
                type: "SET_ALERT",
                payload: { type: "error", message: "Error message" },
              })
            }
          >
            Send alert
          </button>
        </Router>
      </AlertContext.Provider>
    </div>
  );
}

export default App;
