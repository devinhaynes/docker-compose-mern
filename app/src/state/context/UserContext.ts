import { createContext, Dispatch } from "react";
import { IUser, UserAction } from "../../types/IUser";

export const defaultUsers: IUser[] = [];

export const UserContext = createContext<{
  users: IUser[];
  dispatchUsers: Dispatch<UserAction>;
}>({
  users: defaultUsers,
  dispatchUsers: () => null,
});
