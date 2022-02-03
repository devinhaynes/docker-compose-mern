import { IUser, UserAction } from "../../types/IUser";

export const UserReducer = (state: IUser[], action: UserAction): IUser[] => {
  switch (action.type) {
    case "SET_USERS":
      return action.payload.multipleUsers
        ? action.payload.multipleUsers
        : state;
    case "ADD_USER":
      return [...state, action.payload.singleUser!];
    case "REMOVE_USER":
      return state.filter(
        (user) => user._id !== action.payload.singleUser!._id
      );
    default:
      return state;
  }
};
