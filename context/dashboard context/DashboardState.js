import {createContext, useEffect, useReducer} from "react";
import dashboardReducer from "./dashboardReducer";
import {deleteCookie, getDataFromCookie, recordMember} from "../../utils/utils";
import {
  SET_AUTH_ERROR,
  SET_CONNECTION_ERROR,
  SET_ERROR,
  SET_INIT_LOADING, SET_LOADING,
  SET_SUCCESS,
  SET_USER,
  SET_USER_DOCS, SET_USER_DRAFTS
} from "../types";

const initialState = {
  user: {ee: 'ee'},
  error: false,
  connectionError: false,
  initLoading: true,
  loading: false,
  userDocs: [],
  userDrafts: [],
  success: false,
}

export const DashboardContext = createContext(initialState);

export const DashboardProvider = ({children}) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const url = 'https://sortcode-api.herokuapp.com/api/'

  // get current user
  const getCurrentUser = async () => {
    setError(false);
    setInitLoading(true);

    const user = await securedFetcher('user');

    if (user.error) {
      if (user.statusCode === 401) logUserOut()
      else setError(user.message);
      return setInitLoading(false);
    }

    setDispatch(SET_USER, user);
    setDispatch(SET_USER_DOCS, user.documents);

    const drafts = user.documents.filter(doc => doc.draft);
    setDispatch(SET_USER_DRAFTS, drafts)
    setInitLoading(false)
  }

  useEffect(() => {
    let isSubscribed = true;
    const token = getDataFromCookie('access_token');
    (async () => {
      if (isSubscribed) {
        if (token) {
          await getCurrentUser(token)
        }

      }
    })()

    return () => {
      isSubscribed = false
    };
  }, [])

  const addDocument = async (title, document, language, date, tag, draft) => {
    setLoading(true);

    const newDocument = {title, document, language, date, tag, draft};
    const res = await postRequest('documents/new', newDocument, 'POST');

    if (res.error) {
      if (res.statusCode === 401) logUserOut();
      else setError(res.message);
      return setLoading(false);
    }

    setSuccess(draft ? 'Saved document' : 'Published document');
    setLoading(false);
  }

  const incrementLikes = async (id) => {
    const res = await postRequest(`documents/hearts/${id}`, {}, 'PUT', true);

    if (res.error) {
      if (res.statusCode === 401) logUserOut();
      else setError(res.message);
      return
    }

    setSuccess('Liked document');
    // code for likes
    recordMember(id, '__.e-doc-li-ke-s')
  }

  const incrementViews = async (id) => {
    const res = await postRequest(`documents/views/${id}`, {}, 'PUT', true);

    if (res.error) {
      if (res.statusCode === 401) logUserOut();
      else setError(res.message);
      return
    }

    // code for views
    recordMember(id, '__.e-doc-vi-ew-s')
  }

  const updateDocument = async (id, title, document, language, date, tag, draft) => {
    setLoading(true);

    const updatedDocument = {title, document, language, date, tag, draft};
    const res = await postRequest(`documents/${id}`, updatedDocument, 'PUT');

    if (res.error) {
      if (res.statusCode === 401) logUserOut();
      else setError(res.message);
      return setLoading(false);
    }

    setSuccess(draft ? 'Saved document' : 'Published document');
    await getCurrentUser()
    setLoading(false);
  }

  const deleteDocument = async (id) => {
    setLoading(true);

    const res = await postRequest(`documents/del/${id}`, {}, 'DELETE');

    if (res.error) {
      if (res.statusCode === 401) logUserOut();
      else setError(res.message);
      return setLoading(false);
    }

    setSuccess('Document deleted');
    await getCurrentUser()
    setLoading(false);
  }

  // actions. constants
  const postRequest = async (path, body, method, notPrivate) => {
    const token = getDataFromCookie('access_token');
    if (!token && !notPrivate) {
      return logUserOut()
    }

    try {
      const res = await fetch(`${url}${path}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          access_token: token
        }
      });

      return await res.json();
    } catch (err) {
      console.log(err)
      setConnectionError()
      return 'err'
    }
  }

  const securedFetcher = async (path) => {
    const token = getDataFromCookie('access_token');
    if (!token) {
      return logUserOut()
    }

    try {
      const res = await fetch(`${url}${path}`, {
        method: 'get',
        headers: {
          accept: 'application/json',
          access_token: token
        }
      });

      return await res.json();
    } catch (err) {
      setConnectionError()
      return 'err'
    }
  }

  const logUserOut = () => {
    setDispatch(SET_AUTH_ERROR, true);
    setTimeout(() => {
      deleteCookie('access_token');
    }, 5000)
  };

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

  const setLoading = (bool) => {
    setDispatch(SET_LOADING, bool)
  }

  const setSuccess = (msg) => {
    setDispatch(SET_SUCCESS, msg)
  }

  useEffect(() => {
    let t;
    if (state.error) {
      t = setTimeout(() => {
        setError(false);
      }, 5000)
    }

    return () => clearTimeout(t);
  }, [state.error]);

  return (
    <DashboardContext.Provider value={{
      documents: state.documents,
      loading: state.loading,
      initLoading: state.initLoading,
      error: state.error,
      connectionError: state.connectionError,
      langDocuments: state.langDocuments,
      tagDocuments: state.tagDocuments,
      user: state.user,
      userDocs: state.userDocs,
      userDrafts: state.userDrafts,
      success: state.success,
      setDispatch,
      addDocument,
      updateDocument,
      deleteDocument,
      setSuccess,
      likeDocument: incrementLikes,
      updateViews: incrementViews
    }}>
      {children}
    </DashboardContext.Provider>
  )
}
