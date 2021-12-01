import {StyledSuccessHandler} from "./styles/SuccessHandler.styled";
import {useEffect} from "react";

const SuccessHandler = ({message, setActive}) => {
  useEffect(() => {
    let t;
    if (message) {
      t = setTimeout(() => {
        setActive(false);
      }, 3000);
    }

    return () => clearTimeout(t);
  }, [message])

  return (
    <StyledSuccessHandler active={message}>
      <p>
        <i className='fas fa-check-circle'/>
        {message}
      </p>
    </StyledSuccessHandler>
  )
}

export default SuccessHandler