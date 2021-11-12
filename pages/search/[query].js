import HomeLayout from "../../components/layouts/HomeLayout";
import SideBar from "../../components/SideBar";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/global context/GlobalState";
import Meta from "../../components/Meta";
import DocumentList from "../../components/DocumentList";
import {FILTER_SEARCH_QUERY} from "../../context/types";

const index = () => {
  const [capQuery, setCapQuery] = useState([])
  const [filterType, setFilterType] = useState('')
  const router = useRouter();
  const {query} = router.query;
  const {documents, searchQuery, searchResults: results} = useContext(GlobalContext);


  useEffect(() => {
    if (!query) return;
    if (documents.length <= 0) return

    searchQuery(query);
    setCapQuery(query.substr(0, 1).toUpperCase() + query.substr(1))
  }, [query, documents]);

  return (
    <HomeLayout title={{
      headerTitle: `Search results on ${capQuery}`,
      mainTitle: 'Search results'
    }}>
      <Meta title={`Search results on ${capQuery} | SortCode`}/>
      <div>
        <DocumentList documents={results} capTitle={`Search query: ${capQuery}`}
                      _404Title={`the search query: ${capQuery}`} setFilterType={setFilterType}
                      documentTypeName={FILTER_SEARCH_QUERY}/>
        <SideBar/>
      </div>
    </HomeLayout>
  );
};

export default index;