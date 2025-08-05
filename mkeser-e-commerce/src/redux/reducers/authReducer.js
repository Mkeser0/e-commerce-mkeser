import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/authAction';

const initialState = {
  user: null,           // Giriş yapan kullanıcı bilgisi
  loading: false,       // API çağrıları sırasında yüklenme durumu
  error: null,          // Hatalar burada tutulur
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };

    case SIGN_UP_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
