import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  h3 {
    text-align: right;
    font-size: 1rem;
    color: #444;
    margin-right: 3px;
    margin-top: 13px;
  }
`;

export const StyledSidebarItem = styled.div`
  background-color: #d4ebf4;
  margin: 10px 0;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    max-height: 30px;
    min-width: 30px;
    margin-right: 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #fff;
  }

  div {
    flex: 1;
  }

  div > p {
    font-size: 0.9rem;
    font-weight: 500;
    color: #444;
  }

  div > span {
    font-size: 0.6rem;
    color: #888;
  }
`;
