import styled from 'styled-components';

export const StyledNestedErrorHandler = styled.div`
  padding: 25px 10px;
  color: tomato;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  i {
    margin-right: 10px;
  }

  p {
    font-size: 0.85rem;
  }

  div p {
    font-weight: 600;
    font-size: 0.95rem;
  }
`