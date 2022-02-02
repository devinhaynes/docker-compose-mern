import { createContext, Dispatch } from "react";
import { IError, ErrorAction } from "../../types/IError";

export const defaultError: IError = { type: null, message: "" };

export const ErrorContext = createContext<{
  error: IError;
  dispatchError: Dispatch<ErrorAction>;
}>({
  error: defaultError,
  dispatchError: () => null,
});
