import { createContext, Dispatch } from "react";
import { IAlert, AlertAction } from "../../types/IAlert";

export const defaultAlert: IAlert = { type: null, message: "" };

export const AlertContext = createContext<{
  alert: IAlert;
  dispatchAlert: Dispatch<AlertAction>;
}>({
  alert: defaultAlert,
  dispatchAlert: () => null,
});
