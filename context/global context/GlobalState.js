import globalAppReducer from './globalAppReducer';
import {
  SEARCH_QUERY,
  SET_ALL_DOCUMENTS,
  SET_AUTH_ERROR,
  SET_AUTHOR,
  SET_CONNECTION_ERROR,
  SET_CURRENT_MONTH_DOCUMENTS,
  SET_ERROR,
  SET_INIT_LOADING,
  SET_CATEGORY_DOCUMENTS,
  SET_PREV_MONTH_DOCUMENTS,
  SET_TAG_DOCUMENTS,
  SET_USER,
  SET_USER_DOCUMENTS,
} from '../types';
import { useEffect } from 'react';
import { prevMonth, thisMonth } from '../../utils/dates';
import {
  deleteCookie,
  getDataFromCookie,
  setCookie,
  sortDocuments,
  url,
} from '../../utils/utils';

const { createContext, useReducer } = require('react');

const initialValue = {
  tags: [
    { tag: 'Home', bg: '#ccc', active: true, href: '/' },
    { tag: 'Front-end', bg: '#b48c6c', href: '/category/front-end' },
    { tag: 'Back-end', bg: '#303030', href: '/category/back-end' },
    { tag: 'JavaScript', bg: '#f0db4f', href: '/tags/javascript' },
    { tag: 'React', bg: '#61dafb', href: '/tags/react' },
    { tag: 'Vue', bg: '#41B883', href: '/tags/vue' },
    { tag: 'Node', bg: '#3C873A', href: '/tags/node' },
    { tag: 'Python', bg: '#4b8bbe', href: '/tags/python' },
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
  searchResults: [],
  authError: false,
  successMsg: false,
  user: {},
  userDocuments: [],
  docsAuthor: {},
};

export const GlobalContext = createContext(initialValue);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalAppReducer, initialValue);

  const fetcher = async (path) => {
    try {
      const res = await fetch(`${url}${path}`);

      return await res.json();
    } catch (err) {
      setConnectionError(true);
      return {
        error: 'Connection error',
      };
    }
  };

  const getAllDocuments = async (page) => {
    localStorage.setItem('page_index', page);
    setError(false);
    setInitLoading(true);

    // add an attribute to cookie for new users so as to redirect them with next whenever they try accessing
    // dashboard when not logged in
    const newUser = getDataFromCookie('new_user');
    const token = getDataFromCookie('access_token');
    if (!newUser && !token) {
      setCookie('new_user');
    }

    const documents = await fetcher(`documents?page=${page}`);
    if (documents.error) {
      setInitLoading(false);
      return setError(documents.message);
    }

    // TODO: uses reverse i.e new docs, change to most viewed that a user hasn't seen within a week or day
    const thisMonthDocs = [];
    const prevMonthDocs = [];

    documents.forEach((doc) => {
      const date = new Date(doc.createdAt);
      if (thisMonth === date.getMonth()) {
        thisMonthDocs.push(doc);
      } else if (prevMonth === date.getMonth()) {
        prevMonthDocs.push(doc);
      }
    });

    setDispatch(
      SET_ALL_DOCUMENTS,
      sortDocuments(documents.reverse(), 'createdAt')
    );
    setDispatch(SET_PREV_MONTH_DOCUMENTS, prevMonthDocs);
    setDispatch(SET_CURRENT_MONTH_DOCUMENTS, thisMonthDocs);
    setInitLoading(false);
  };

  const getCategoryDocuments = async (category) => {
    // initials
    setError(false);
    setDispatch(SET_CATEGORY_DOCUMENTS, []); // making sure other category doesn't reflect in new ones
    setInitLoading(true);

    const langDocuments = await fetcher(`documents/category/${category}`);
    if (langDocuments.error) {
      setInitLoading(false);
      return setError(langDocuments.message);
    }

    setDispatch(
      SET_CATEGORY_DOCUMENTS,
      sortDocuments(langDocuments.reverse(), 'createdAt')
    );
    setInitLoading(false);
  };

  const getTagDocuments = async (tag) => {
    // initials
    setError(false);
    setDispatch(SET_TAG_DOCUMENTS, []); // making sure other tags doesn't reflect in new ones
    setInitLoading(true);

    // remove the s from tag name
    const tagDocuments = await fetcher(`documents/tags/${tag}`);
    if (tagDocuments.error) {
      setInitLoading(false);
      return setError(tagDocuments.message);
    }

    setDispatch(
      SET_TAG_DOCUMENTS,
      sortDocuments(tagDocuments.reverse(), 'createdAt')
    );
    setInitLoading(false);
  };

  const getUserDocuments = async (userId) => {
    // initials
    setError(false);
    setDispatch(SET_USER_DOCUMENTS, []); // making sure other tags doesn't reflect in new ones
    setInitLoading(true);

    // get the users profile
    const user = await fetcher(`users/${userId}`);
    const userDocuments = await fetcher(`documents/users/${userId}`);
    if (userDocuments.error) {
      setInitLoading(false);
      return setError(userDocuments.message);
    }

    setDispatch(SET_AUTHOR, user);
    setDispatch(
      SET_USER_DOCUMENTS,
      sortDocuments(userDocuments.reverse(), 'createdAt')
    );
    setInitLoading(false);
  };

  // change to algolia
  const searchQuery = (query) => {
    setDispatch(SEARCH_QUERY, query);
  };

  // sign users in
  const signInUser = async (callbackState, code) => {
    setInitLoading(true);
    try {
      const appState = localStorage.getItem('github-state');
      if (appState !== callbackState) {
        setError('Sign in compromised. Try again!');
        return setInitLoading(false);
      }

      const res = await fetch(`${url}users/register`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const jsonRes = await res.json();
      if (res.ok) {
        deleteCookie('new_user');
        setCookie('access_token', jsonRes.token);
        // reload is done to help nextjs notice the access token and redirect to dashboard
        window.location.reload();
        setInitLoading(false);
      } else {
        setInitLoading(false);
        return setError(jsonRes.message);
      }
    } catch (err) {
      return setConnectionError(true);
    }
  };

  // get signed in user
  const signedInUser = async (token) => {
    setInitLoading(true);

    try {
      const res = await fetch(`${url}user`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          access_token: token,
        },
      });

      const jsonRes = await res.json();
      if (res.ok) {
        setDispatch(SET_USER, jsonRes);
      } else {
        if (jsonRes.statusCode === 401) logUserOut();
        else setError(jsonRes.message);
      }

      setInitLoading(false);
    } catch (err) {
      return setConnectionError(true);
    }
  };

  const logUserOut = () => {
    setDispatch(SET_AUTH_ERROR, true);
    setTimeout(() => {
      deleteCookie('access_token');
    }, 5000);
  };

  useEffect(() => {
    let isSubscribed = true;
    const token = getDataFromCookie('access_token');
    (async () => {
      if (isSubscribed) {
        if (token) {
          await signedInUser(token);
        }

        await getAllDocuments(1);
      }
    })();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const setDispatch = (type, payload) => {
    dispatch({
      type,
      payload,
    });
  };

  const setConnectionError = (bool) => {
    setDispatch(SET_CONNECTION_ERROR, bool);
  };

  const setError = (msg) => {
    setDispatch(SET_ERROR, msg);
  };

  const setInitLoading = (bool) => {
    setDispatch(SET_INIT_LOADING, bool);
  };

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
        authError: state.authError,
        successMsg: state.successMsg,
        user: state.user,
        userDocuments: state.userDocuments,
        docsAuthor: state.docsAuthor,
        getAllDocuments,
        getLangDocuments: getCategoryDocuments,
        getTagDocuments,
        setDispatch,
        searchQuery,
        signInUser,
        getUserDocuments,
        setConnectionError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// the algorithm for ranking docs on the homepage is simply getting the newest (around two weeks or so)
// most viewed and liked document that the user hasn't seen.

// for category, tags, we can simply use latest documents, and a filter for most viewed and
// most liked (excluding the ones you've seen)
