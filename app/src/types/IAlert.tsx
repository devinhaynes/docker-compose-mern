export interface IAlert {
  type: "info" | "success" | "error" | null;
  message: string;
}
type AlertActionType = "SET_ALERT" | "REMOVE_ALERT";
export type AlertAction = { type: AlertActionType; payload?: IAlert };
