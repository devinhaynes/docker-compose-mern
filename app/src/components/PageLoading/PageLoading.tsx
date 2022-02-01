import { FC } from "react";
import "./PageLoading.scss";

interface IPageLoadingProps {
  message?: string;
}

export const PageLoading: FC<IPageLoadingProps> = ({ message }) => {
  return (
    <div className="PageLoading">
      <div className="PageLoading__content">
        <span>spinner</span>
        <p className="PageLoading__text">Loading...</p>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};
