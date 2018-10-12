import {  FETCH_BOOKS , FETCH_BOOKS_WITH_PAGE , ADD_SEARCH_TEXT,GET_BOOK_INFO} from '../constants/types';

const initialState = {
  books : [],
  searchText : "",
  Time  : 0,
  CurrentPage : 0,
  Total : 0,
  link : ""
}


export default function (state = initialState , action) {
  switch (action.type) {
    case ADD_SEARCH_TEXT : 
      state = {
        ...state,
        searchText : action.payload
      };
      return state;
    case FETCH_BOOKS :
      
      state = {
        ...state,
        books : action.payload.Books,
        
        Time  : action.payload.Time,
        CurrentPage : action.payload.Page,
        Total : action.payload.Total
      };
      return state;
    case FETCH_BOOKS_WITH_PAGE :
      state = {
        ...state,
        books : action.payload.Books,
        Time  : action.payload.Time,
        CurrentPage : action.payload.Page,
        Total : action.payload.Total
      }; 
      return state;
    case GET_BOOK_INFO :
      console.log(action.payload)
      state = {
        ...state,
        link : action.payload.info_url
      };  
      return state;

    default:
      return state;
  }
}