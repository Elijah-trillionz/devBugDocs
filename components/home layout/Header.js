import {ActionButton, StyledButton} from '../styles/Button.Styled';
import {
  StyledHeader,
  UpperHeader,
  Intro,
  DesignSvgOne,
  DesignSvgTwo,
  CircleConOne,
  CircleConTwo,
} from '../styles/home layout/Header.styled';
import Link from 'next/link'
import DesignSvg from '../svgs/DesignSvg';
import CircleSvg from '../svgs/CircleSvg';

const Header = ({title}) => {
  // more to do on the header
  return (
    <StyledHeader>
      <DesignSvgOne>
        <DesignSvg/>
      </DesignSvgOne>
      <CircleConOne>
        <CircleSvg/>
      </CircleConOne>
      <UpperHeader>
        <p>SortCode</p>
        <StyledButton bg='#000' border='#000' color='#fff'>
          <Link href='/user' as='/user'>
            Login with GitHub
          </Link>
        </StyledButton>
      </UpperHeader>
      <Intro>
        <div>
          <h2>{title ? title : 'Document Your Coding Experience'}</h2>
          <ActionButton border='#fff' color='#444'>
            <Link href='/user' as='/user'>
              Get Started
            </Link>
          </ActionButton>
        </div>
      </Intro>
      <DesignSvgTwo>
        <DesignSvg/>
      </DesignSvgTwo>
      <CircleConTwo>
        <CircleSvg/>
      </CircleConTwo>
    </StyledHeader>
  );
};

export default Header;
