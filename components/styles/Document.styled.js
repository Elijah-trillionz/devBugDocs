import styled, { keyframes } from 'styled-components';

export const StyledDocument = styled.article`
  padding-right: 15px;

  h1 {
    padding: 10px 0;
    font-size: ${({ longTitle }) => (longTitle ? '1.4rem' : '2rem')};
    text-transform: capitalize;
    font-family: 'Ubuntu', sans-serif;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.5;
    word-spacing: 2px;
  }

  h1::after {
    display: block;
    content: ' ';
    width: 30%;
    height: 2.3px;
    border-radius: 3px;
    margin-top: 6px;
    background-color: ${({ theme }) => theme.colors.header};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-right: 1px solid #ccc;
    margin-right: 20px;
  }
`;

export const StyledDocumentMeta = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Markdown = styled.div`
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 20px;
    margin-bottom: 5px;
    font-family: 'Lato', sans-serif;
  }

  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    color: #000 !important;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.9rem;
  }

  p,
  li {
    font-size: 0.96rem;
    padding: 10px 0;
    line-height: 1.6;
    word-spacing: 2px;
    color: #333;
  }

  code {
    background-color: #d4ebf4;
    display: inline-block;
    padding: 0 5px;
    border-radius: 5px;
    margin: 3px;
  }

  pre > code {
    background-color: #000;
    color: #fff;
    font-size: 0.9rem;
    display: block;
    padding: 10px;
  }

  ul,
  ol {
    margin-left: 17px;
  }

  li {
    font-size: 0.96rem;
  }

  a {
    color: #333;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    text-decoration: underline transparent;
  }

  strong,
  b {
    font-weight: 600;
  }
`;

// document actions
const breathing = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.14)
  }
  100% {
    transform: scale(1)
  }
`;

export const LikeDocument = styled.div`
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;

  h3 {
    flex: 1;
  }

  i {
    font-size: 3.5rem;
    margin-right: 30px;
    cursor: pointer;
    color: #444;
    animation: ${breathing} 1.3s linear infinite;
    transition: 0.3s ease-in-out;
  }

  i:hover {
    color: tomato;
  }
`;

export const ShareDocument = styled(LikeDocument)`
  i {
    font-size: 1.7rem;
    margin-right: 14px;
    animation: none;
    transition: 0.2s ease-in-out;
  }

  .fa-facebook:hover {
    color: #3b5998;
  }

  .fa-twitter:hover {
    color: #00acee;
  }

  .fa-hacker-news-square:hover {
    color: #ff6600;
  }

  .fa-reddit:hover {
    color: #ff4500;
  }

  .fa-linkedin:hover {
    color: #0077b5;
  }
`;
