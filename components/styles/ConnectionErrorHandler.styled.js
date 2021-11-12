import styled from "styled-components";

export const StyledConnectionErrorHandler = styled.div`
  position: fixed;
  bottom: 0;
  margin: 10px 0 !important;
  width: 100%;
  transform: ${({active}) => active ? 'translateY(0)' : 'translateY(140%)'};
  transition: 0.3s ease-in-out;
  height: 10%;

  div {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 50px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme}) => theme.colors.header};
  }

  p {
    margin: 0 auto;
    color: #fff;
    font-size: 1rem;
  }
`