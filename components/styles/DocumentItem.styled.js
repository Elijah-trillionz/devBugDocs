import styled from "styled-components";

export const StyledDocumentItem = styled.div`
  background-color: #fff;
  margin: 13px 0;
  border-radius: 7px;
  box-shadow: 0 1px 2px 0 #e5e5e5;
  border: 2px solid #fff;
  padding: 8px 22px;
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors.header};
  }

  & > span {
    display: block;
    text-align: right;
    font-size: 0.6rem;
    color: #666;
  }

  & > a {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: #444;
    margin-top: 5px;
    margin-bottom: 15px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    line-height: 1.7;
  }

  & > a:hover {
    color: ${({ theme }) => theme.colors.header};
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div span {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left: 3px;
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-bottom: 3px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    margin-right: 6px;
  }

  i {
    font-size: 0.8rem;
    color: #666;
    margin-right: 5px;
  }

  a {
    color: #666;
    font-size: 0.76rem;
    display: inline-block;
    text-decoration: underline transparent;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    text-decoration-color: #666;
  }
`;

export const StatsItems = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  i {
    font-size: 0.8rem;
    color: #666;
    margin-right: 5px;
  }

  p {
    color: #666;
    font-size: 0.76rem;
  }
`;
