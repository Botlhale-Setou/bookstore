import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const configureStore = combineReducers({
  book: booksReducer,
  category: categoryReducer,
});

export default configureStore;
