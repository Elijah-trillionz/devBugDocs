import styled from 'styled-components';

export const Home = styled.div`
  & > div {
    display: block;
    margin: 10px 20px;
  }

  main {
    margin-right: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & > div {
      display: grid;
      grid-template-columns: auto 250px;
      margin: 10px 40px;
    }

    main {
      margin-right: 25px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    & > div {
      margin: 10px 70px;
    }
  }
`;
