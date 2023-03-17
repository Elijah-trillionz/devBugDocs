import HomeLayout from "../../components/layouts/HomeLayout";
import SideBar from "../../components/SideBar";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/global context/GlobalState";
import Meta from "../../components/Meta";
import DocumentList from "../../components/DocumentList";
import {FILTER_SEARCH_QUERY} from "../../context/types";

const Index = () => {
  const [capQuery, setCapQuery] = useState([]);
  const [filterType, setFilterType] = useState('');
  const router = useRouter();
  const {query} = router.query;
  const {documents, searchQuery, searchResults: results} = useContext(GlobalContext);


  useEffect(() => {
    if (!query) return;
    if (documents.length <= 0) return

    searchQuery(query);
    setCapQuery(query.substring(0, 1).toUpperCase() + query.substring(1))
    // eslint-disable-next-line
  }, [query, documents]);

  return (
    <HomeLayout title={{
      headerTitle: `Search results on ${capQuery}`,
      mainTitle: 'Search results'
    }}>
      <Meta title={`Search results on ${capQuery} | devBugDocs`}/>
      <div>
        <DocumentList documents={results} capTitle={`Search query: ${capQuery}`}
                      _404Title={`the search query: ${capQuery}`} setFilterType={setFilterType}
                      documentTypeName={FILTER_SEARCH_QUERY} context={GlobalContext} _404msg={'Not Found'}
                      dashboard={false}/>
        <SideBar/>
      </div>
    </HomeLayout>
  );
};

export default Index;