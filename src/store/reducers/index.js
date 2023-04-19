import { combineReducers } from 'redux';
import userReducer from './userReducer';
import booksReducer from './booksReducer';
import cartReducer from './cartReducer';
import purchaseReducer from './purchaseReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  cart: cartReducer,
  purchase: purchaseReducer,
  modal: modalReducer,
});

export default rootReducer;
