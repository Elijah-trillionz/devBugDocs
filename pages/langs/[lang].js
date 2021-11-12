import {useContext, useEffect, useState} from 'react';
import HomeLayout from '../../components/layouts/HomeLayout';
import SideBar from '../../components/SideBar';
import {GlobalContext} from '../../context/global context/GlobalState';
import {useRouter} from "next/router";
import Meta from "../../components/Meta";
import DocumentList from "../../components/DocumentList";
import {SET_LANG_DOCUMENTS} from "../../context/types";

const Index = () => {
  const [capLang, setCapLang] = useState('')
  const [filterType, setFilterType] = useState('Recently Uploaded')
  const {langDocuments, getLangDocuments} = useContext(GlobalContext);
  const router = useRouter()
  const {lang} = router.query;

  useEffect(() => {
    if (!lang) {
      return
    }

    setCapLang(lang.substr(0, 1).toUpperCase() + lang.substr(1))  // capitalized language
    getLangDocuments(lang)
  }, [lang])

  return (
    <HomeLayout smallerDiv={false}
                title={{headerTitle: ` ${filterType} Documents on ${capLang}`, mainTitle: capLang}}>
      <Meta title={`Documents on ${capLang} | SortCode`}/>
      <div>
        <DocumentList documents={langDocuments} setFilterType={setFilterType} capTitle={capLang}
                      documentTypeName={SET_LANG_DOCUMENTS} _404Title={capLang}/>
        <SideBar/>
      </div>
    </HomeLayout>
  );
};

export default Index;
