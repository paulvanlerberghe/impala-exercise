import {
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_PENDING,
  FETCH_BOOKS_SUCCESS,
  TOGGLE_COMPLETION_BOOK,
} from "../actions/booksActions";

import initialState from "../initialState";

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        books: action.books.map(books => ({...books, completed: false})),
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case TOGGLE_COMPLETION_BOOK:
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.book.id) {
            return {...book, ...action.book}
          } else {
           return book
          }
        }),
      };
    default:
      return state;
  }
};

export default booksReducer;

export const getBooks = (state) => state.books;
export const getBooksPending = (state) => state.pending;
export const getBooksError = (state) => state.error;
