import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./reducers/booksReducer";
import initialState from "./initialState";

const middlewares = [thunk];

const store = createStore(booksReducer, initialState, applyMiddleware(...middlewares));

export default store;