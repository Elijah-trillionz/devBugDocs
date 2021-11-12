import {
  SET_ALL_DOCUMENTS,
  SET_INIT_LOADING,
  SET_LOADING,
  SET_ERROR,
  SET_CONNECTION_ERROR,
  SET_LANG_DOCUMENTS,
  SET_TAG_DOCUMENTS,
  SET_CURRENT_MONTH_DOCUMENTS,
  SET_PREV_MONTH_DOCUMENTS,
  SEARCH_QUERY,
  FILTER_SEARCH_QUERY
} from "../types";

const searchQuery = (documents, query) => {
  return documents.filter(doc => {
    return doc.title.toLowerCase().includes(query.toLowerCase())
  });
}

const globalAppReducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_DOCUMENTS:
      return {
        ...state,
        documents: action.payload
      };
    case SET_LANG_DOCUMENTS:
      return {
        ...state,
        langDocuments: action.payload
      };
    case SET_TAG_DOCUMENTS:
      return {
        ...state,
        tagDocuments: action.payload
      };
    case SET_CURRENT_MONTH_DOCUMENTS:
      return {
        ...state,
        currentMonthDocuments: action.payload
      };
    case SET_PREV_MONTH_DOCUMENTS:
      return {
        ...state,
        prevMonthDocuments: action.payload
      };
    case SEARCH_QUERY:
      return {
        ...state,
        searchResults: searchQuery(state.documents, action.payload)
      };
    case FILTER_SEARCH_QUERY:
      return {
        ...state,
        searchResults: action.payload
      };
    case SET_INIT_LOADING:
      return {
        ...state,
        initLoading: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_CONNECTION_ERROR:
      return {
        ...state,
        connectionError: action.payload
      };
    default:
      return state;
  }
};

export default globalAppReducer;
