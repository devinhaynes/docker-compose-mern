import { IAlert } from "../../types/IAlert";
import { defaultAlert } from "../context/AlertContext";
import { AlertAction } from "../../types/IAlert";

export const AlertReducer = (state: IAlert, action: AlertAction): IAlert => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        type: action.payload ? action.payload.type : "error",
        message: action.payload
          ? action.payload.message
          : "Something went wrong",
      };
    case "REMOVE_ALERT":
      return defaultAlert;
    default:
      return state;
  }
};
