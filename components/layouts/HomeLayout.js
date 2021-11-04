import Footer from '../Footer';
import Header from '../home/Header';
import MicroNav from '../home/MicroNav';
import SideBar from '../SideBar';
import { Home } from '../styles/home/Home.styled';

const HomeLayout = ({ children }) => {
  return (
    <Home>
      <Header />
      <MicroNav />
      <div>
        {children}
        <SideBar />
      </div>
      <Footer />
    </Home>
  );
};

export default HomeLayout;
