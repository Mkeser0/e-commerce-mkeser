// redux/actions/clientActions.js

// Action Types
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";
export const RESET_CLIENT_STATE = "RESET_CLIENT_STATE";

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setAddressList = (addressList) => ({
  type: SET_ADDRESS_LIST,
  payload: addressList,
});

export const setCreditCards = (creditCards) => ({
  type: SET_CREDIT_CARDS,
  payload: creditCards,
});

export const resetClientState = () => ({
  type: RESET_CLIENT_STATE,
});


export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const roles = getState().role.roles;
    if (roles.length > 0) return; // daha önce yüklendiyse tekrar fetch etme

    try {
      const res = await fetch("/roles");
      const data = await res.json();
      dispatch(setRoles(data));
    } catch (error) {
      console.error("Roller alınamadı:", error);
    }
  };
};