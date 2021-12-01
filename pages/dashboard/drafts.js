import DashboardLayout from '../../components/layouts/DashboardLayout';
import {useContext} from "react";
import {DashboardContext} from "../../context/dashboard context/DashboardState";
import SideBarStats from "../../components/dashboard layout/SideBarStats";
import EmptyDocs from "../../components/EmptyDocs";
import DocumentItem from "../../components/DocumentItem";
import Meta from "../../components/Meta";

const Drafts = () => {
  const {userDrafts, user} = useContext(DashboardContext);

  return (
    <DashboardLayout>
      <Meta title={`${user.user ? `${user.user.name} Drafts` : 'loading...'} | SortCode`}/>
      <div>
        <main>
          <h3>Your drafts</h3>
          {userDrafts.length <= 0 ?
            <EmptyDocs msg={`You don't have any drafts`}/> :
            userDrafts.map((document) => (
              <DocumentItem document={document} key={document.id} dashboard={true}/>
            ))
          }
        </main>
        <SideBarStats/>
      </div>
    </DashboardLayout>
  );
};

export default Drafts;
