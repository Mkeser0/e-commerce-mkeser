// redux/store.js
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCardReducer';
import clientReducer from "./reducers/clientReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  client: clientReducer,
});

export const myStore = createStore(rootReducer, applyMiddleware(thunk));