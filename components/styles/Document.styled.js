import styled, { keyframes } from "styled-components";
import { StyledSearchModal } from "./MicroNav.styled";

export const StyledDocument = styled.article`
  padding-right: 15px;

  h1 {
    padding: 10px 0;
    font-size: ${({ longTitle }) => (longTitle ? "1.4rem" : "2rem")};
    text-transform: capitalize;
    font-family: "Ubuntu", sans-serif;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.5;
    word-spacing: 2px;
  }

  h1::after {
    display: block;
    content: " ";
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
    font-family: "Lato", sans-serif;
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

  pre {
    max-width: 700px;
  }

  pre > code {
    width: 100%;
    background-color: #0e1217;
    font-size: 0.9rem;
    padding: 20px 15px;
    margin: 0;
    overflow-x: scroll;
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
export const LikeDocument = styled.div`
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  h3 {
    flex: 1;
    font-size: 0.85rem;
  }

  p {
    font-size: 2rem;
    color: #444;
    margin-right: 30px;
    display: flex;
    align-items: center;
    font-family: "ubuntu", sans-serif;
  }

  i {
    font-size: 2.5rem;
    cursor: pointer;
    margin-left: 10px;
    color: ${({ defColor }) => (defColor ? "tomato" : "#444")};
    border: 3px solid transparent;
    transition: 0.3s ease-in-out;
  }

  i:hover {
    color: #f5ac41;
  }
`;

export const StyledLoginModal = styled(StyledSearchModal)``;
