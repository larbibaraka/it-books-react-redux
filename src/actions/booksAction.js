import { FETCH_BOOKS , SEARCH_BOOKS} from '../constants/types';

export function fetchBooks(item) {
  return function (dispatch) {
    const searchItem = "java"
    const url = `http://it-ebooks-api.info/v1/search/${searchItem}`;
    fetch(url)
    .then(res => res.json())
    .then(items => dispatch({
      type : FETCH_BOOKS,
      payload : items
    }));
  }
}

export function searchItem(text) {
  return {
    type : SEARCH_BOOKS,
    payload : text 
  }
}