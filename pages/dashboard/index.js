import DashboardLayout from '../../components/layouts/DashboardLayout';
import {SET_TAG_DOCUMENTS} from "../../context/types";
import {useContext} from "react";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import DocumentList from "../../components/DocumentList";
import SideBarStats from "../../components/dashboard layout/SideBarStats";

const Dashboard = () => {
  const {userDocs} = useContext(DashboardContext);

  return (
    <DashboardLayout>
      <div>
        <DocumentList setFilterType={() => {
        }} documents={userDocs} capTitle={`Your documents`} documentTypeName={SET_TAG_DOCUMENTS}
                      _404msg={'You have not published an documents yet'} context={DashboardContext} dashboard={true}/>
        <SideBarStats/>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
