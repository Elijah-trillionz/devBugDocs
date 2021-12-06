import styled from 'styled-components';

export const Home = styled.div`
  & > div {
    display: block;
    padding: 10px 30px;
  }

  main {
    margin-right: 0;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
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

  @media (min-width: ${({theme}) => theme.breakpoints.tabletL}) {
    & > div {
      grid-template-columns: 75% 25%;
      padding: ${({smallerDiv}) => (smallerDiv ? '10px 40px' : '10px 70px')};
    }
  }

  @media (min-width: ${({theme}) => theme.breakpoints.laptop}) {
    & > div {
      padding: 10px 70px;
    }
  }
`;

export const DocumentItemAction = styled.div`
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

  div:hover div {
    display: block !important;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    padding: 0 3px;

    h3 {
      text-align: left;
    }
  }
`

export const DropDown = styled.div`
  position: absolute;
  right: 5px;
  top: 115%;
  background: ${({theme}) => theme.colors.button};
  border-radius: 5px;
  min-width: 180px;
  display: none;

  &::after {
    content: ' ';
    display: block;
    border-width: 7px;
    border-color: transparent transparent ${({theme}) => theme.colors.hover} transparent;
    border-style: solid;
    position: absolute;
    top: -17%;
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
    background: ${({theme}) => theme.colors.hover};
  }
`
