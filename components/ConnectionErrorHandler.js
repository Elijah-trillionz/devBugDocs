import {StyledConnectionErrorHandler} from "./styles/ConnectionErrorHandler.styled";
import {useContext} from "react";
import {GlobalContext} from "../context/global context/GlobalState";

const ConnectionErrorHandler = () => {
  const {connectionError} = useContext(GlobalContext);

  return (
    <StyledConnectionErrorHandler active={connectionError}>
      <div>
        <p>
          <i className='fas fa-exclamation-circle'/>{' '}
          Connection Error
        </p>
      </div>
    </StyledConnectionErrorHandler>
  )
}

export default ConnectionErrorHandler