import {useContext, useEffect} from "react";
import {GlobalContext} from "../context/global context/GlobalState";

const useLoadMore = (documentFunction, moreInfo, info) => {
  useEffect(() => {
    // if (moreInfo && !info) return;

    const loadMoreDocuments = (e) => {
      const page = +localStorage.getItem('page_index');
      const htmlEl = e.target.querySelector('html');
      if (htmlEl.scrollTop >= page * 2232 && htmlEl.scrollTop <= page * 2332) {
        console.log(info, 'from me twice')
        loadMore(info)
      }
    };

    window.addEventListener('scroll', loadMoreDocuments);

    return () => window.removeEventListener('scroll', loadMoreDocuments);
  }, []);

  const loadMore = (info) => {
    const index = +localStorage.getItem('page_index');
    info ? documentFunction(info, index + 1) : documentFunction(index + 1);
  }

  return true
};

export default useLoadMore;