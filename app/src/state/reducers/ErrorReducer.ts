import { defaultError } from "../context/ErrorContext";

import { ErrorAction, IError } from "../../types/IError";

export const ErrorReducer = (state: IError, action: ErrorAction): IError => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...state,
        type: action.payload ? action.payload.type : "local",
        message: action.payload
          ? action.payload.message
          : "Something went wrong",
      };
    case "REMOVE_ERROR":
      return defaultError;
    default:
      return state;
  }
};
