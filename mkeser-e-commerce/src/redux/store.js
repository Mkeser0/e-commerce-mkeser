// redux/store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCardReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  shoppingCard: shoppingCartReducer,
});

export const myStore = createStore(rootReducer, applyMiddleware(thunk));