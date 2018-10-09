import {  FETCH_BOOKS} from '../constants/types';

const initialState = {
  books : [],
  Time  : 0,
  CurrentPage : 1,
  Total : 0
}


export default function (state = initialState , action) {
  switch (action.type) {
    case FETCH_BOOKS :
      state = {
        ...state,
        books : action.payload.Books,
        Time  : action.payload.Time,
        CurrentPage : action.payload.Page,
        Total : action.payload.Total
      };
      return state;
   
    default:
      return state;
  }
}