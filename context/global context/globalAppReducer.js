import {
  SET_ALL_DOCUMENTS,
  SET_INIT_LOADING,
  SET_LOADING,
  SET_ERROR,
  SET_CONNECTION_ERROR,
  SET_CATEGORY_DOCUMENTS,
  SET_TAG_DOCUMENTS,
  SET_CURRENT_MONTH_DOCUMENTS,
  SET_PREV_MONTH_DOCUMENTS,
  SEARCH_QUERY,
  FILTER_SEARCH_QUERY,
  SET_AUTH_ERROR,
  SET_SUCCESS,
  SET_USER,
  SET_USER_DOCUMENTS,
  SET_AUTHOR,
} from "../types";

const searchQuery = (documents, query) => {
  return documents.filter((doc) => {
    return doc.title.toLowerCase().includes(query.toLowerCase());
  });
};

const globalAppReducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_DOCUMENTS:
      return {
        ...state,
        documents: action.payload,
      };
    case SET_CATEGORY_DOCUMENTS:
      return {
        ...state,
        langDocuments: action.payload,
      };
    case SET_TAG_DOCUMENTS:
      return {
        ...state,
        tagDocuments: action.payload,
      };
    case SET_USER_DOCUMENTS:
      return {
        ...state,
        userDocuments: action.payload,
      };
    case SET_AUTHOR:
      return {
        ...state,
        docsAuthor: action.payload,
      };
    case SET_CURRENT_MONTH_DOCUMENTS:
      return {
        ...state,
        currentMonthDocuments: action.payload,
      };
    case SET_PREV_MONTH_DOCUMENTS:
      return {
        ...state,
        prevMonthDocuments: action.payload,
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchResults: searchQuery(state.documents, action.payload),
      };
    case FILTER_SEARCH_QUERY:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_INIT_LOADING:
      return {
        ...state,
        initLoading: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CONNECTION_ERROR:
      return {
        ...state,
        connectionError: action.payload,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case SET_SUCCESS:
      return {
        ...state,
        successMsg: action.payload,
      };
    default:
      return state;
  }
};

export default globalAppReducer;
