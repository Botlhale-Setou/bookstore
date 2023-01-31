import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  book: booksReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer,
});

export default store;
