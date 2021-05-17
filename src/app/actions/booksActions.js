export const FETCH_BOOKS_PENDING = "FETCH_BOOKS_PENDING";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";
export const TOGGLE_COMPLETION_BOOK = "TOGGLE_COMPLETION_BOOK";

export const fetchBooksPending = () => {
  return {
    type: FETCH_BOOKS_PENDING,
  };
}

export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books: books,
  };
}

export const fetchBooksError = (error) => {
  return {
    type: FETCH_BOOKS_ERROR,
    error: error,
  };
}

export const toggleCompletionBook = (book) => {
  return {
    type: TOGGLE_COMPLETION_BOOK,
    book: {...book, completed: !book.completed},
  };
}