import { FC, useContext } from "react";
import { AlertContext } from "../../state/context/AlertContext";
import "./Alert.scss";
import { IAlert } from "../../types/IAlert";

export const Alert: FC<IAlert> = ({ type, message }) => {
  const { alert, dispatchAlert } = useContext(AlertContext);
  return (
    <div className={`Alert Alert__${type}`}>
      <div>
        <span>{type}</span>
        <button onClick={() => dispatchAlert({ type: "REMOVE_ALERT" })}>
          X
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};
