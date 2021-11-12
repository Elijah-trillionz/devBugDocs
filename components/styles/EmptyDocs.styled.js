import styled from "styled-components";

export const StyledEmptyDocs = styled.div`
  margin-top: 25px;
  text-align: center;

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`