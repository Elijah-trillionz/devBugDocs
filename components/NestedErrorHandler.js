import {StyledNestedErrorHandler} from "./styles/NestedErrorHandler.styled";

const NestedErrorHandler = ({errorMsg}) => {
  return (
    <StyledNestedErrorHandler>
      <div>
        <i className={'fas fa-exclamation-triangle'}/>
        <p>An error occurred:</p>
      </div>
      <p>{`{${errorMsg}}`}</p>
    </StyledNestedErrorHandler>
  );
};

export default NestedErrorHandler;