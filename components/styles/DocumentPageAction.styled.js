import styled from "styled-components";
import { BodyOverlay } from "./MicroNav.styled";

export const StyledDocumentPageAction = styled.div`
  display: flex;
  margin-top: 10px;
  position: relative;

  h3 {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    color: #444;
  }

  div > i {
    cursor: pointer;
    font-size: 0.85rem;
    transition: 0.3s ease-in-out;
    color: #444;
    padding-right: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 3px;

    h3 {
      text-align: left;
    }
  }
`;

export const DropDown = styled.div`
  position: absolute;
  right: 6px;
  top: 115%;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 5px;
  min-width: 180px;
  display: ${({ active }) => (active ? "block" : "none")};
  z-index: 2;

  &::after {
    content: " ";
    display: block;
    border-width: 7px;
    border-color: transparent transparent ${({ theme }) => theme.colors.hover}
      transparent;
    border-style: solid;
    position: absolute;
    bottom: 100%;
    right: 7px;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 0.8rem;
    cursor: pointer;
    padding: 10px 20px;
    transition: 0.3s ease-in-out;
  }

  li:first-child {
    border-radius: 6px 6px 0 0;
  }

  li:last-child {
    border-radius: 0 0 6px 6px;
  }

  li:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const LightBodyOverlay = styled(BodyOverlay)`
  opacity: 0;
  z-index: 1;
`;
