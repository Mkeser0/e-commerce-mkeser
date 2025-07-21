import axiosInstance from "../../api/axiosInstance";
import {
  setProductList,
  setTotal,
  setFetchState,
} from "../actions/productAction";

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(setFetchState("FETCHING"));
  const { limit, offset } = getState().product;

  try {
    const res = await axiosInstance.get(`/products?limit=${limit}&offset=${offset}`);
    dispatch(setProductList(res.data.products));
    dispatch(setTotal(res.data.total));
    dispatch(setFetchState("FETCHED"));
    console.log("Ürünler başarıyla alındı:", res.data.products);
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Ürünler alınırken hata oluştu:", error);
  }
};