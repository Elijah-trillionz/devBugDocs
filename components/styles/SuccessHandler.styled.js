import styled from 'styled-components';

export const StyledSuccessHandler = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;
  margin: 10px 0;
  display: block !important;
  width: 30%;
  transform: ${({active}) => active ? 'translateY(0)' : 'translateY(-190%)'};
  transition: 0.3s ease-in-out;
  padding: 15px 20px !important;
  background: #3caf50;
  border-radius: 6px;
  z-index: 15;

  p {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1rem;
  }

  i {
    font-size: 1.6rem;
    padding-right: 20px;
  }
`