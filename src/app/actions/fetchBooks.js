import {
  fetchBooksPending,
  fetchBooksSuccess,
  fetchBooksError,
} from "./booksActions";

const API_JSON = 'https://raw.githubusercontent.com/sing2gather/impala-exercise/main/data.json';

function fetchBooks() {
  return (dispatch) => {
    dispatch(fetchBooksPending());
    fetch(API_JSON)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchBooksSuccess(res.books));
        return res.books;
      })
      .catch((error) => {
        dispatch(fetchBooksError(error));
      });
  };
}

export default fetchBooks;
