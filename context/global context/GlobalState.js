import globalAppReducer from './globalAppReducer';
import {
  SEARCH_QUERY,
  SET_ALL_DOCUMENTS,
  SET_CONNECTION_ERROR, SET_CURRENT_MONTH_DOCUMENTS,
  SET_ERROR,
  SET_INIT_LOADING,
  SET_LANG_DOCUMENTS, SET_PREV_MONTH_DOCUMENTS,
  SET_TAG_DOCUMENTS
} from "../types";
import {useEffect} from "react";
import {prevMonth, thisMonth} from "../../utils/dates";

const {createContext, useReducer} = require('react');

const initialValue = {
  tags: [
    {tag: 'Home', bg: '#ccc', active: true, href: '/'},
    {tag: 'Issues', bg: 'tomato', href: '/tags/issues'},
    {tag: 'Features', bg: '#3caf50', href: '/tags/features'},
    {tag: 'Observations', bg: '#fc929e', href: '/tags/observations'},
    {tag: 'Exercises', bg: 'purple', href: '/tags/exercises'},
    {tag: 'React', bg: '#61dafb', href: '/langs/react'},
    {tag: 'JavaScript', bg: '#f0db4f', href: '/langs/javascript'},
    {tag: 'Python', bg: '#4b8bbe', href: '/langs/python'},
  ],
  documents: [],
  langDocuments: [],
  tagDocuments: [],
  error: false,
  connectionError: false,
  initLoading: true,
  loading: false,
  currentMonthDocuments: [],
  prevMonthDocuments: [],
  searchResults: []
};

export const GlobalContext = createContext(initialValue);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(globalAppReducer, initialValue);

  const fetcher = async (path) => {
    try {
      const res = await fetch(`https://sortcode-api.herokuapp.com/api/${path}`);

      return await res.json();
    } catch (err) {
      console.log(err)
      setConnectionError()
      return 'err'
    }
  }

  const getAllDocuments = async () => {
    setInitLoading(true)
    const documents = await fetcher('documents');
    if (documents.error) {
      setInitLoading(false);
      return setError(documents.error);
    }

    // TODO: uses reverse i.e new docs, change to most viewed that a user hasn't seen within a week or day
    const thisMonthDocs = [];
    const prevMonthDocs = [];

    documents.forEach((doc) => {
      const date = new Date(doc.createdAt);
      if (thisMonth === date.getMonth()) {
        thisMonthDocs.push(doc);
      } else if (prevMonth === date.getMonth()) {
        prevMonthDocs.push(doc)
      }
    });

    setDispatch(SET_ALL_DOCUMENTS, documents.reverse());
    setDispatch(SET_PREV_MONTH_DOCUMENTS, prevMonthDocs)
    setDispatch(SET_CURRENT_MONTH_DOCUMENTS, thisMonthDocs)
    setInitLoading(false)
  }

  useEffect(() => {
    let isSubscribed = true;
    (async () => {
      if (isSubscribed) {
        await getAllDocuments()
      }
    })()

    return () => {
      isSubscribed = false
    };
  }, [])

  const getLangDocuments = async (lang) => {
    // initials
    setDispatch(SET_LANG_DOCUMENTS, []); // making sure other langs doesn't reflect in new ones
    setInitLoading(true)

    const langDocuments = await fetcher(`documents/langs/${lang}`);
    if (langDocuments.error) {
      setInitLoading(false);
      return setError(langDocuments.error);
    }

    setDispatch(SET_LANG_DOCUMENTS, langDocuments.reverse());
    setInitLoading(false)
  }

  const getTagDocuments = async (tag) => {
    // initials
    setDispatch(SET_TAG_DOCUMENTS, []);// making sure other tags doesn't reflect in new ones
    setInitLoading(true)

    const tagDocuments = await fetcher(`documents/tags/${tag}`);
    if (tagDocuments.error) {
      setInitLoading(false);
      return setError(tagDocuments.error);
    }

    setDispatch(SET_TAG_DOCUMENTS, tagDocuments.reverse());
    setInitLoading(false)
  }

  // change to algolia
  const searchQuery = (query) => {
    setDispatch(SEARCH_QUERY, query);
  }

  const setDispatch = (type, payload) => {
    dispatch({
      type,
      payload
    })
  }

  const setConnectionError = () => {
    setDispatch(SET_CONNECTION_ERROR, true)
  }

  const setError = (msg) => {
    setDispatch(SET_ERROR, msg)
  }

  const setInitLoading = (bool) => {
    setDispatch(SET_INIT_LOADING, bool)
  }

  return (
    <GlobalContext.Provider
      value={{
        tags: state.tags,
        documents: state.documents,
        loading: state.loading,
        initLoading: state.initLoading,
        error: state.error,
        connectionError: state.connectionError,
        langDocuments: state.langDocuments,
        tagDocuments: state.tagDocuments,
        currentMonthDocuments: state.currentMonthDocuments,
        prevMonthDocuments: state.prevMonthDocuments,
        searchResults: state.searchResults,
        getLangDocuments,
        getTagDocuments,
        setDispatch,
        searchQuery
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// the algorithm for ranking docs on the homepage is simply getting the newest (around two weeks or so)
// most viewed and liked document that the user hasn't seen.

// for langs, tags, we can simply use latest documents, and a filter for most viewed and
// most liked (excluding the ones you've seen)
