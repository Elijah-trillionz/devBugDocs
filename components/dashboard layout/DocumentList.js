import {DropDown, DocumentItemAction} from "../styles/home layout/Home.styled";
import EmptyDocs from "../EmptyDocs";
import DocumentItem from "../DocumentItem";
import {sortDocument} from "../../utils/utils";
import {useContext, useState} from "react";
import NestedErrorHandler from "../NestedErrorHandler";

const DocumentList = ({documents, capTitle, documentTypeName, _404Title, context}) => {
  const [loading, setLoading] = useState(false)
  const {setDispatch, initLoading, error} = useContext(context)

  const sortDocumentByViews = () => {
    sortDocument(documents, 'views');
    // a minor delay
    setLoading(true)
    setTimeout(() => {
      setDispatch(documentTypeName, documents);
      setLoading(false)
    }, 300)
  }

  const sortDocumentByHearts = () => {
    sortDocument(documents, 'hearts');
    // a minor delay
    setLoading(true)
    setTimeout(() => {
      setDispatch(documentTypeName, documents);
      setLoading(false)
    }, 300)
  }

  return (
    <main>
      {initLoading ? <p style={{marginTop: '20px', color: '#444'}}>Loading...</p> :
        error ? (
          <NestedErrorHandler errorMsg={error}/>
        ) : (
          <>
            <DocumentItemAction>
              <h3>{capTitle}</h3>
              <div>
                <i className='fas fa-filter'/>
                <DropDown>
                  <ul>
                    <li onClick={sortDocumentByViews}>Most views</li>
                    <li onClick={sortDocumentByHearts}>Most hearts</li>
                  </ul>
                </DropDown>
              </div>
            </DocumentItemAction>
            {documents.length <= 0 ?
              <EmptyDocs msg={`There are no ${_404Title} yet`}/> :
              (
                loading ? <p style={{fontSize: '0.8rem', marginTop: '20px', color: '#444'}}>Loading..</p> :
                  <>
                    {documents.map((document) => (
                      <DocumentItem document={document} key={document.id} dashboard={true}/>
                    ))
                    }
                  </>
              )}
          </>
        )
      }
    </main>
  )
}

export default DocumentList