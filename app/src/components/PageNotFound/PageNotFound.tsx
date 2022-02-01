import { FC } from "react";
import "./PageNotFound.scss";

const defaultMessage =
  "We're sorry, but we are unable to find the page you were looking for!";

interface IPageNotFoundProps {
  message?: string;
}

export const PageNotFound: FC<IPageNotFoundProps> = ({
  message = defaultMessage,
}) => {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <h2>{message}</h2>
    </div>
  );
};
