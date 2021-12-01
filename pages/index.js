import {useContext, useEffect} from 'react';
import DocumentItem from '../components/DocumentItem';
import HomeLayout from '../components/layouts/HomeLayout';
import SideBar from '../components/SideBar';
import {GlobalContext} from '../context/global context/GlobalState';
import NestedErrorHandler from "../components/NestedErrorHandler";
import useLoadMore from "../Custom hooks/useLoadMore";

const Home = () => {
  const {documents, initLoading, error, getAllDocuments} = useContext(GlobalContext);
  useLoadMore(getAllDocuments, false, false)

  return (
    <HomeLayout smallerDiv={false}>
      <div>
        <main>
          {
            error ? (
              <NestedErrorHandler errorMsg={error}/>
            ) : (
              <>
                {
                  documents.map((document, index) => (
                    <DocumentItem document={document} key={index} index={index + 1}/>
                  ))
                }
                {initLoading && <p style={{marginTop: '20px', marginBottom: '20px', color: '#444'}}>Loading...</p>}
              </>
            )
          }
        </main>
        <SideBar/>
      </div>
    </HomeLayout>
  );
};

export default Home;
