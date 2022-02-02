export interface IError {
  type: "http" | "local" | null;
  message?: string;
}

type ErrorActionType = "SET_ERROR" | "REMOVE_ERROR";
export type ErrorAction = { type: ErrorActionType; payload?: IError };
