import { useContext, useEffect, useState } from "react";
import HomeLayout from "../../components/layouts/HomeLayout";
import SideBar from "../../components/SideBar";
import { GlobalContext } from "../../context/global context/GlobalState";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import DocumentList from "../../components/DocumentList";
import { SET_CATEGORY_DOCUMENTS } from "../../context/types";

const Index = () => {
  const [capCategory, setCapCategory] = useState("");
  const [filterType, setFilterType] = useState("Recently Uploaded");
  const { langDocuments, getLangDocuments } = useContext(GlobalContext);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    if (!category) {
      return;
    }

    setCapCategory(category.substr(0, 1).toUpperCase() + category.substr(1)); // capitalized language
    getLangDocuments(category);
    //  eslint-disable-next-line
  }, [category]);

  return (
    <HomeLayout
      smallerDiv={false}
      title={{
        headerTitle: ` ${filterType} Documents on ${capCategory}`,
        mainTitle: capCategory,
      }}
    >
      <Meta title={`Documents on ${capCategory} | SortCode`} />
      <div>
        <DocumentList
          documents={langDocuments}
          setFilterType={setFilterType}
          capTitle={capCategory}
          documentTypeName={SET_CATEGORY_DOCUMENTS}
          _404msg={`There are no documents on ${capCategory} yet`}
          dashboard={false}
          context={GlobalContext}
        />
        <SideBar />
      </div>
    </HomeLayout>
  );
};

export default Index;
