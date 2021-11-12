import {useContext, useEffect} from 'react';
import DocumentItem from '../components/DocumentItem';
import HomeLayout from '../components/layouts/HomeLayout';
import SideBar from '../components/SideBar';
import {GlobalContext} from '../context/global context/GlobalState';

const Home = () => {
  const {documents, initLoading} = useContext(GlobalContext);

  return (
    <HomeLayout smallerDiv={false}>
      <div>
        <main>
          {initLoading ? <p style={{marginTop: '20px', color: '#444'}}>Loading...</p> :
            <>
              {
                documents.map((document) => (
                  <DocumentItem document={document} key={document.id}/>
                ))
              }
            </>
          }
        </main>
        <SideBar/>
      </div>
    </HomeLayout>
  );
};

export default Home;
