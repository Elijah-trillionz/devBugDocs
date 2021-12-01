import Meta from '../Meta';
import ConnectionErrorHandler from "../ConnectionErrorHandler";
import {StyledDashboard} from "../styles/Dashboard layout/Dashboard.styled";
import Header from "../dashboard layout/Header";
import {useContext} from "react";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import Footer from "../Footer";

const DashboardLayout = ({children}) => {
  const {user} = useContext(DashboardContext)

  return (
    <StyledDashboard>
      <Header/>
      <Meta title={`${user.user ? `${user.user.name} Dashboard` : 'loading...'} | SortCode`}/>
      {children}
      <Footer/>
      <ConnectionErrorHandler context={DashboardContext}/>
    </StyledDashboard>
  );
};

export default DashboardLayout;
