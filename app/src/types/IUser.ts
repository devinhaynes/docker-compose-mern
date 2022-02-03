export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  hobbies: string[];
}

type UserActionType = "ADD_USER" | "REMOVE_USER" | "SET_USERS";
export type UserAction = {
  type: UserActionType;
  payload: { singleUser?: IUser; multipleUsers?: IUser[] };
};
