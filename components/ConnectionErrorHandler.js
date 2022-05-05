import { StyledConnectionErrorHandler } from './styles/ConnectionErrorHandler.styled';
import { useContext } from 'react';

const ConnectionErrorHandler = ({ context }) => {
  const { connectionError, setConnectionError } = useContext(context);

  return (
    <StyledConnectionErrorHandler active={connectionError}>
      <div>
        <p>
          <i className='fas fa-exclamation-circle' /> Connection Error
        </p>
        <i
          className='fas fa-times-circle'
          onClick={() => setConnectionError(false)}
        />
      </div>
    </StyledConnectionErrorHandler>
  );
};

export default ConnectionErrorHandler;
