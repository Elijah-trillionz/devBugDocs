import styled from 'styled-components';
import {Home} from "../home layout/Home.styled";

export const StyledDashboard = styled(Home)`
  & > div {
    margin-top: 80px;
  }

  main > h3 {
    flex: 1;
    font-size: 1rem;
    color: #444;
    text-align: center;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    main > h3 {
      text-align: left;
    }
  }

    // @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
  //   margin-left: 65px;
  // }
`