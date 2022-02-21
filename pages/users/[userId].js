import { useContext, useEffect, useState } from "react";
import HomeLayout from "../../components/layouts/HomeLayout";
import SideBar from "../../components/SideBar";
import { GlobalContext } from "../../context/global context/GlobalState";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import DocumentList from "../../components/DocumentList";
import { SET_USER_DOCUMENTS } from "../../context/types";

const Index = () => {
  const [filterType, setFilterType] = useState("");
  const { getUserDocuments, userDocuments, docsAuthor } =
    useContext(GlobalContext);
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (!userId) {
      return;
    }

    getUserDocuments(userId);
    //  eslint-disable-next-line
  }, [userId]);

  return (
    <HomeLayout
      smallerDiv={false}
      title={{
        headerTitle: `${filterType} Documents from ${docsAuthor.name}`,
        mainTitle: docsAuthor.name,
      }}
    >
      <Meta title={`Documents from ${docsAuthor.name} | SortCode`} />
      <div>
        <DocumentList
          documents={userDocuments}
          setFilterType={setFilterType}
          capTitle={`${filterType} Documents from ${docsAuthor.name}`}
          documentTypeName={SET_USER_DOCUMENTS}
          _404msg={`There are no documents from ${docsAuthor.name} yet`}
          dashboard={false}
          context={GlobalContext}
        />
        <SideBar />
      </div>
    </HomeLayout>
  );
};
export default Index;
