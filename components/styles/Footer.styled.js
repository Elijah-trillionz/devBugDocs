import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 20px;
  color: ${({ theme }) => theme.colors.textWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.8rem;
  }

  i {
    color: tomato;
  }

  a {
    text-decoration: underline transparent;
    color: ${({ theme }) => theme.colors.header};
    transition: 0.3s ease-in-out;
  }

  a:hover {
    text-decoration-color: currentColor;
  }
`;
