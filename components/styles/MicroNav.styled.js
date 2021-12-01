import styled from 'styled-components';
import {StyledButton} from './Button.Styled';

export const StyledMicroNav = styled.nav`
  background-color: #fff;
  padding: 10px 10px;
  display: ${({sticky}) => (sticky ? 'grid' : 'flex')};
  align-items: center;
  grid-template-columns: 170px auto 30px;
  position: ${({sticky}) => (sticky ? 'fixed' : 'static')};
  top: 0;
  width: 100%;
  box-shadow: ${({sticky}) =>
          sticky ? '0 3px 4px 0 rgba(0,0,0,.2)' : 'unset'};
  transition: 0.3s ease-in-out;
  z-index: 10;

  h2 {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
  }

  & > div:first-child {
    flex: 1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul > li {
    cursor: pointer;
    padding: 4px 10px;
    margin: 0 4px;
    background: ${({theme}) => theme.colors.button};
    border-radius: 3px;
    font-size: 0.7rem;
    transition: background-color 0.3s ease-in-out;
    display: inline-block;
  }

  ul > li:hover {
    background: ${({theme}) => theme.colors.hover};
  }

  ul > li a {
    color: #000;
    text-decoration: none;
  }

  ul > li > span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-left: 3px;
  }

  & > i {
    color: #ccc;
    font-size: 1.1rem;
    background-color: #fff;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  & > i:hover {
    color: ${({theme}) => theme.colors.header};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}) {
    display: block;

    h2 {
      margin-bottom: 20px;
      text-align: center;
    }

    ul {
      text-align: center;
    }

    & > i {
      position: fixed;
      bottom: 10px;
      left: 10px;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      padding: 0;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
      font-size: 0.8rem;
    }

    & > i:hover {
      background-color: ${({theme}) => theme.colors.textWhite};
    }

    input {
      width: 280px;
    }
  }
`;

export const StyledSearchModal = styled.div`
  position: fixed;
  top: ${({active}) => (active ? '40%' : '-150%')};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 300px;
  height: fit-content;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 20px 20px 0 hsla(0, 100%, 0%, 0.3);
  z-index: 12;
  padding: 25px 0;
  transition: 0.4s ease-in-out;

  h3 {
    color: #444;
    text-align: center;
    padding-bottom: 10px;
    font-size: 1.2rem;
    font-family: 'Ubuntu', sans-serif;
  }

  input {
    display: block;
    width: 230px;
    padding: 10px 13px;
    border: 2px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    padding-right: 23px;
  }

  input:focus {
    border-color: ${({theme}) => theme.colors.header};
  }

  @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
    width: 450px;

    input {
      width: 280px;
    }
  }
`;

export const SearchButton = styled(StyledButton)`
  width: 100%;
  margin-top: 7px;
  box-shadow: none;
`;

export const BodyOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${({active}) =>
          active ? 'rgba(0,0,0,0.2)' : 'transparent'};
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
  opacity: ${({active}) => (active ? 1 : 0)};
  transition: 0.4s ease-in-out;
  width: 100%;
  height: 100%;
  z-index: 11;
  margin: 0 !important;
`;

export const BackToTopModal = styled.div`
  position: fixed;
  bottom: 80px;
  right: ${({active}) => (active ? '10px' : '-50px')};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  padding: 0;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  background-color: ${({theme}) => theme.colors.header};
  color: ${({theme}) => theme.colors.textWhite};
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;
