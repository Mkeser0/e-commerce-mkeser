// ==========================
// 2. redux/reducers/authReducer.js
// ==========================

// ► Amaç: auth state'ini yöneten reducer fonksiyonu. Gelen action'lara göre state güncellenir.

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../actions/authAction';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case SIGN_UP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;