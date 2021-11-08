import Footer from '../Footer';
import Header from '../home layout/Header';
import MicroNav from '../MicroNav';
import { Home } from '../styles/home/Home.styled';

const HomeLayout = ({ children, smallerDiv }) => {
  const tags = [
    { tag: 'Home', bg: '#ccc', active: true, href: '/' },
    { tag: 'Issues', bg: 'tomato', href: '/tags/issues' },
    { tag: 'Features', bg: '#3caf50', href: '/tags/features' },
    { tag: 'Observations', bg: '#fc929e', href: '/tags/observations' },
    { tag: 'Exercises', bg: 'purple', href: '/tags/exercises' },
    { tag: 'JavaScript', bg: '#f0db4f', href: '/langs/javascript' },
    { tag: 'React', bg: '#61dafb', href: '/langs/react' },
  ];

  return (
    <Home smallerDiv={smallerDiv}>
      <Header />
      <MicroNav tags={tags} />
      {children}
      <Footer />
    </Home>
  );
};

export default HomeLayout;
