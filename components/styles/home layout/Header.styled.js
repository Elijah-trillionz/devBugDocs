import styled, {keyframes} from 'styled-components';

export const StyledHeader = styled.header`
  padding: 15px 25px;
  background-color: ${({theme}) => theme.colors.header};
  font-family: 'Poppins', sans-serif;
  position: relative;
  height: 300px;
  z-index: 0;
`;

export const UpperHeader = styled.div`
  display: flex;
  align-items: center;

  p {
    flex: 1;
    font-family: 'Ubuntu', sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const Intro = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 45px 0;

  h2 {
    text-align: center;
    color: ${({theme}) => theme.colors.textWhite};
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const DesignSvgOne = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-40%);
  z-index: -1;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const DesignSvgTwo = styled(DesignSvgOne)`
  right: 10%;
  left: unset;
  transform: translateY(-50%) rotate(24.49deg);
`;

export const CircleConOne = styled.div`
  position: absolute;
  width: 50px;
  bottom: 0;
  left: 0;
  z-index: -1;
  transform: rotate(180deg);
`;

export const CircleConTwo = styled(CircleConOne)`
  width: unset;
  right: 0;
  left: unset;
  bottom: unset;
  top: 0;
  transform: rotate(360deg);
`;
