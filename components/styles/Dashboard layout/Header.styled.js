import styled from "styled-components";
import { HeaderDropDown } from "../home layout/Header.styled";

export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  position: fixed;
  box-shadow: ${({ sticky }) =>
    sticky ? "0 3px 4px 0 rgba(215,215,215,.75)" : "unset"};
  top: 0;
  width: 100%;
  transition: 0.3s ease-in-out;
  z-index: 10;

  h2 {
    flex: 1;
    font-family: "ubuntu", sans-serif;
    font-size: 1.45rem;
  }

  a {
    color: #000;
    text-decoration: none;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.header};
  }

  button {
    display: block;
    margin-right: 20px;
    padding: 0 10px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.header};
    background: transparent;
    cursor: pointer;
    font-family: "poppins", sans-serif;
    font-size: 0.65rem;
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    button {
      display: none;
    }
  }
`;

export const UserAvatar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.header};
  }

  & > p {
    display: none;
    user-select: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 10px;
    border: 2px solid ${({ theme }) => theme.colors.header};
    border-radius: 10px;

    img {
      border: none;
    }

    & > p {
      display: block;
      font-size: 0.65rem;
      padding-right: 5px;
    }
  }
`;

export const DashboardHeaderDropDown = styled(HeaderDropDown)`
  top: 115%;
  right: 5%;
  box-shadow: 1px 2px 2px 0 rgba(213, 213, 213, 0.75),
    2px 4px 4px 0 rgba(213, 213, 213, 0.75),
    4px 8px 8px 0 rgba(213, 213, 213, 0.75),
    12px 22px 22px 0 rgba(213, 213, 213, 0.75);

  &::after {
    content: " ";
    display: block;
    border-width: 9px;
    border-color: transparent transparent ${({ theme }) => theme.colors.hover}
      transparent;
    border-style: solid;
    position: absolute;
    bottom: 100%;
    right: 7px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    p {
      display: none;
    }

    li:first-child {
      border-radius: 6px 6px 0 0;
    }
  }
`;
