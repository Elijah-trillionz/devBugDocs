import { StyledSuccessHandler } from "./styles/SuccessHandler.styled";
import { useEffect } from "react";
import { StyledErrorHandler } from "./styles/ErrorHandler.styled";

const ErrorHandler = ({ message, setActive }) => {
  useEffect(() => {
    let t;
    if (message) {
      t = setTimeout(() => {
        setActive(false);
      }, 3000);
    }

    return () => clearTimeout(t);
  }, [message]);

  return (
    <StyledErrorHandler active={message}>
      <p>
        <i className="fas fa-times-circle" />
        {message}
      </p>
    </StyledErrorHandler>
  );
};

export default ErrorHandler;
