// redux/reducers/productReducer.js
import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_FILTERED_PRODUCTS,
  SET_SELECTED_PRODUCT,
  SET_TOTAL,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_SORT_BY,
  SET_FETCH_STATE,
} from "../actions/productAction";

const initialState = {
  categories: [],
  productList: [],
  filteredProducts: [],
  selectedProduct: null,
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  sortBy: "",
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_FILTERED_PRODUCTS:
      return { ...state, filteredProducts: action.payload };
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

export default productReducer;