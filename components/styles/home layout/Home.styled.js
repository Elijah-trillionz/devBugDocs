import styled from "styled-components";

export const Home = styled.div`
  & > div {
    display: block;
    padding: 10px 30px;
  }

  main {
    margin-right: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & > div {
      display: grid;
      grid-template-columns: 70% 30%;
      padding: 10px 40px;
    }

    main {
      margin-right: 25px;
    }

    main > h3 {
      text-align: left;
      padding-left: 3px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    & > div {
      grid-template-columns: 75% 25%;
      padding: ${({ smallerDiv }) => (smallerDiv ? "10px 40px" : "10px 70px")};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    & > div {
      padding: 10px 70px;
    }
  }
`;
