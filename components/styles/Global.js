import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
    background: ${({theme}) => theme.colors.body};
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #46A2C9;
    border-radius: 25px;
  }
`;

export default GlobalStyles;
