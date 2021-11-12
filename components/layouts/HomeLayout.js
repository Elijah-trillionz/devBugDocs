import Footer from '../Footer';
import Header from '../home layout/Header';
import MicroNav from '../MicroNav';
import {Home} from '../styles/home layout/Home.styled';
import ConnectionErrorHandler from "../ConnectionErrorHandler";

const HomeLayout = ({children, smallerDiv, title}) => {

  return (
    // smaller divs are for articles page, we drastically reduce the horizontal margins
    <Home smallerDiv={smallerDiv}>
      <Header title={title?.headerTitle}/>
      <MicroNav mainTitle={title?.mainTitle}/>
      {children}
      <Footer/>
      <ConnectionErrorHandler/>
    </Home>
  );
};

export default HomeLayout;
