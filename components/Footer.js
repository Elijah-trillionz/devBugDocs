import { StyledFooter } from './styles/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright 2021-now</p>
      <p>
        Built with <i className='fas fa-heart'></i> by{' '}
        <a href='https://twitter.com/elijahtrillionz'>Elijah Trillionz</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
