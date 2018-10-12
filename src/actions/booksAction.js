import { FETCH_BOOKS, FETCH_BOOKS_WITH_PAGE, ADD_SEARCH_TEXT } from '../constants/types';

export function searchText(text) {
  return ({
    type : ADD_SEARCH_TEXT,
    payload : text
  })
  
}



export function fetchBooks(item) {
  return function (dispatch) {
    const searchItem = item;
    const url = `http://it-ebooks-api.info/v1/search/${searchItem}/`;
    fetch(url)
    .then(res => res.json())
    .then(items => dispatch({
      type : FETCH_BOOKS,
      payload : items
    }));
  }
}


export function fetchBooksWithPageNumber(pageNumber, item) {
    return function (dispatch) {
      const searchItem = item;
      const url = `http://it-ebooks-api.info/v1/search/${searchItem}/page/${pageNumber}`;
      fetch(url)
      .then(res => res.json())
      .then(items => dispatch ({
        type : FETCH_BOOKS_WITH_PAGE,
        payload : items
      }))
      
    }
}
