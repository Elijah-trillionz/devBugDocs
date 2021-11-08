import { ActionButton, StyledButton } from '../styles/Button.Styled';
import {
  StyledHeader,
  UpperHeader,
  Intro,
  DesignSvgOne,
  DesignSvgTwo,
  CircleConOne,
  CircleConTwo,
} from '../styles/home layout/Header.styled';
import DesignSvg from '../svgs/DesignSvg';
import CircleSvg from '../svgs/CircleSvg';

const Header = () => {
  return (
    <StyledHeader>
      <DesignSvgOne>
        <DesignSvg />
      </DesignSvgOne>
      <CircleConOne>
        <CircleSvg />
      </CircleConOne>
      <UpperHeader>
        <p>SortCode</p>
        <StyledButton bg='#000' border='#000' color='#fff'>
          Login with GitHub
        </StyledButton>
      </UpperHeader>
      <Intro>
        <div>
          <h2>Document Your Coding Experience</h2>
          <ActionButton border='#fff'>Get Started</ActionButton>
        </div>
      </Intro>
      <DesignSvgTwo>
        <DesignSvg />
      </DesignSvgTwo>
      <CircleConTwo>
        <CircleSvg />
      </CircleConTwo>
    </StyledHeader>
  );
};

export default Header;
