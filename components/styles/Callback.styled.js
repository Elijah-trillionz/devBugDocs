import styled from 'styled-components';
import {StyledButton} from "./Button.Styled";

export const StyledCallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

export const LinkButton = styled(StyledButton)`
  background: ${({theme}) => theme.colors.header};
  margin-top: 25px;
`