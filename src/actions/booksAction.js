import { FETCH_BOOKS } from '../constants/types';

export function fetchBooks(item) {
  return function (dispatch) {
    const searchItem = item;
    const url = `http://it-ebooks-api.info/v1/search/${searchItem}/`;
    //const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(items => dispatch({
      type : FETCH_BOOKS,
      payload : items
    }));
  }
}

