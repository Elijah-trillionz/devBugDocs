import styled, { keyframes } from 'styled-components';

const shake = keyframes`
 0% {
   transform: translateX(0)
 }
 40% {
   transform: translateX(16px)
 }
 80% {
  transform: translateX(-16px)
 }
 100% {
   transform: translateX(0)
 }
`;

export const StyledButton = styled.button`
  outline: none;
  border: 1px solid ${({ border }) => border || 'currentColor'};
  background-color: ${({ bg, theme }) => bg || theme.colors.button};
  padding: 10px 15px;
  color: ${({ color, theme }) => color || theme.colors.textGray};
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 0 10px 0 ${({ shadow }) => shadow || 'hsla(0, 100%, 0%, 0.15)'};
  cursor: pointer;
  display: block;
  margin: 0 auto;
  transition: 0.3s ease-in-out;

  &:hover {
    animation: 0.4s ${shake} linear;
  }
`;

export const ActionButton = styled(StyledButton)`
  width: 150px;
`;
