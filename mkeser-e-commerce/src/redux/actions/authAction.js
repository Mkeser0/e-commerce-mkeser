// ==========================
// redux/actions/authActions.js
// ==========================

import axios from "axios";
import { toast } from "react-toastify";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const LOGOUT = "LOGOUT";

// ==========================
// Synchronous Action Creators
// ==========================
export const logout = () => ({
  type: LOGOUT,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

// ==========================
// Thunk Actions
// ==========================

export const signUp = (formData) => {
  return async (dispatch) => {
    dispatch(signUpRequest());

    try {
      const res = await axiosInstance.post("/signup", formData);
      dispatch(signUpSuccess(res.data.user)); // API'nin döndürdüğü user varsa
      alert("You need to click link in email to activate your account!");
    } catch (error) {
      dispatch(
        signUpFailure(
          error.response?.data?.message || "Kayıt sırasında hata oluştu"
        )
      );
    }
  };
};

// LOGIN
export const loginUserThunk = (formData, history, setError) => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://workintech-fe-ecommerce.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Giriş başarısız");
      }

      const data = await res.json();

      // store'a user'ı yaz
      dispatch({ type: "SET_USER", payload: data.user });

      // remember me kontrolü
      if (formData.remember) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("user", JSON.stringify(data.user));
      }

      // yönlendirme
      history.push("/");
    } catch (err) {
      setError("Giriş bilgileri hatalı.");
    }
  };
};
