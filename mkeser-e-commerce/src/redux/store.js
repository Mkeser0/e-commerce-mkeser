// ==========================
// 3. redux/store.js
// ==========================

// ► Amaç: Redux store'unu oluşturmak. Tüm reducer'lar burada birleştirilir ve middleware (thunk) eklenir.

import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCardReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    shoppingCard : shoppingCartReducer,
});

export const myStore = createStore(rootReducer, applyMiddleware(thunk));
