import styled from "styled-components";
import { Markdown } from "./Document.styled";

export const StyledCreateDocModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 0 !important;
  display: ${({ active }) => (active ? "flex" : "none")} !important;
  flex-direction: column;
  z-index: 12;
  margin: 0 !important;
  overflow-y: scroll;

  body {
    overflow-y: ${({ active }) => (active ? "hidden" : "scroll")} !important;
  }

  button {
    display: block;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    border-radius: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    button {
      width: 50px;
    }

    button span {
      display: none;
    }
  }
`;

export const ModalHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  i {
    font-size: 0.8rem;
    cursor: pointer;
  }

  p {
    font-weight: 600;
    font-size: 1.15rem;
  }

  button {
    font-size: 0.75rem;
  }

  button i {
    font-size: 0.75rem;
  }
`;

export const ModalBody = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  height: 100%;

  .textarea-container {
    height: 100%;
    margin-bottom: 85px;
  }
`;

export const TextArea = styled.textarea`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  border: none;
  margin: 15px 20px;
  display: block;
  width: 100%;
  outline: none;
  font-family: "Poppins", sans-serif;
  resize: none;
  height: ${({ isTitle }) => (isTitle ? "fit-content" : "100%")};
  overflow-wrap: normal;

  &::placeholder {
    color: #aaa;
  }
`;

export const MarkTextArea = styled(TextArea)`
  font-size: 0.85rem;
  font-weight: 400;
  min-height: 100%;
`;

export const ModalPreview = styled(Markdown)`
  padding-top: 10px;
  //display: flex;
  //flex-direction: column;
  //height: 100% !important;
`;

export const PreviewTitle = styled.div`
  margin: 15px 20px;
  //flex-basis: 30%;
  //overflow-y: scroll;

  h1 {
    font-size: 2.5rem;
    text-transform: capitalize;
    font-family: "Ubuntu", sans-serif;
    color: #333;
    line-height: 1.5;
    word-spacing: 2px;
    margin-bottom: 0;
  }
`;

export const PreviewBody = styled.div`
  margin: 15px 20px;
  //flex-basis: auto;
  //overflow-y: scroll;

  pre > code {
    overflow-y: scroll;
  }
`;

export const StyledSettingsView = styled.div`
  padding: 10px 20px;

  p {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 1rem;
  }

  select {
    display: block;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.header};
    padding: 10px;
    outline: none;
    border-radius: 6px;
    font-family: "poppins", sans-serif;
    margin-bottom: 30px;
  }

  button {
    border-color: tomato;
    border-radius: 6px;
    background: tomato;
    color: #fff;
    text-align: left;
    font-size: 0.75rem;
  }
`;

export const WarningModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ active }) =>
    active
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)"};
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 3px 6px 6px 0 rgba(0, 0, 0, 0.1),
    4px 8px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  div {
    float: right;
    display: flex;
  }

  button {
    margin-right: 5px;
    background: transparent;
    color: #444;
    border-color: transparent;
  }

  button:last-child:hover {
    color: tomato;
  }
`;

export const ModalFooter = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: #fff;

  button {
    width: 130px;
    font-size: 0.75rem;
  }

  button i {
    font-size: 0.75rem;
  }

  button:disabled {
    cursor: default;
    border-color: ${({ theme }) => theme.colors.footer};
    color: #333;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    button {
      width: 50px;
    }

    button span {
      display: none;
    }
  }
`;

export const ModalError = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 20px;
  background: tomato;
  border-radius: 0 0 10px 10px;

  p {
    color: #fff;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }

  i {
    padding-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    border-radius: 0;
  }
`;
