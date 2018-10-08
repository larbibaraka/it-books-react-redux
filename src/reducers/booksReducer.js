import { SEARCH_BOOKS , FETCH_BOOKS} from '../constants/types';

const initialState = {
  books : [],
  searchedItem : 'java'
}


export default function (state = initialState , action = {}) {
  switch (action.type) {
    case FETCH_BOOKS :
      state = {
        ...state,
        books : action.payload
      }
      return state;

    case SEARCH_BOOKS : 
      state = {
        ...state,
        searchedItem : action.payload
      } 
      return state;
    default:
      return state;
  }
}