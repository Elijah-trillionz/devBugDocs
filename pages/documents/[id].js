import HomeLayout from '../../components/layouts/HomeLayout';
import Document from '../../components/article/Document';
import SideBar from '../../components/SideBar';
import Meta from '../../components/Meta';
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/global context/GlobalState";

const Index = () => {
  const router = useRouter()
  const {id} = router.query
  const [document, setDocument] = useState({})
  const {documents} = useContext(GlobalContext)

  useEffect(() => {
    if (!id) {
      return
    }


    const doc = documents.filter(document => document.id === id);
    if (doc.length >= 1) {
      // by default, author, hearts, and views are not in meta, so let's redefine it inside
      const refinedDoc = {
        ...doc[0],
        meta: {...doc[0].meta, author: doc[0].author, hearts: doc[0].hearts, views: doc[0].views},
      }
      removeProps(refinedDoc, 'hearts', 'views', 'author')

      setDocument(refinedDoc);
    }
  }, [id, documents]);

  const removeProps = (obj, ...propsName) => {
    propsName.forEach((propName) => {
      delete obj[propName]
    })
  }

  return (
    <HomeLayout smallerDiv={true}>
      <Meta title={document?.title?.substr(0, 1).toUpperCase() + document?.title?.substr(1)}/>
      <div>
        {!document.title ? <p style={{marginTop: '20px', color: '#444'}}>Loading...</p> : (
          <Document
            title={document.title}
            markdown='nothing yet'
            meta={document.meta}
          />
        )}

        <SideBar/>
      </div>
    </HomeLayout>
  );
};

export default Index;
