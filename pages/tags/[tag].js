import {useContext, useEffect, useState} from 'react';
import HomeLayout from '../../components/layouts/HomeLayout';
import SideBar from '../../components/SideBar';
import {GlobalContext} from '../../context/global context/GlobalState';
import {useRouter} from "next/router";
import Meta from "../../components/Meta";
import DocumentList from "../../components/DocumentList";
import {SET_TAG_DOCUMENTS} from "../../context/types";

const Index = () => {
    const [capTag, setCapTag] = useState('')
    const [filterType, setFilterType] = useState('')
    const {getTagDocuments, tagDocuments} = useContext(GlobalContext);
    const router = useRouter()
    const {tag} = router.query;

    useEffect(() => {
      if (!tag) {
        return
      }

      setCapTag(tag.substr(0, 1).toUpperCase() + tag.substr(1)) // capitalize tag
      getTagDocuments(tag) // remove plural
      //  eslint-disable-next-line
    }, [tag])

    return (
      <HomeLayout smallerDiv={false}
                  title={{headerTitle: `${filterType} Documents on Tag: ${capTag}`, mainTitle: capTag}}>
        <Meta title={`Documents on Tag: ${capTag} | SortCode`}/>
        <div>
          <DocumentList documents={tagDocuments} setFilterType={setFilterType} capTitle={`${capTag} tag`}
                        documentTypeName={SET_TAG_DOCUMENTS} _404msg={`There are no documents on ${capTag} yet`}
                        dashboard={false}
                        context={GlobalContext}/>
          <SideBar/>
        </div>
      </HomeLayout>
    );
  }
;

export default Index;
