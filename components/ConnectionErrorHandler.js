import {StyledConnectionErrorHandler} from "./styles/ConnectionErrorHandler.styled";
import {useContext} from "react";
import {GlobalContext} from "../context/global context/GlobalState";

const ConnectionErrorHandler = ({context}) => {
  const {connectionError} = useContext(context);

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