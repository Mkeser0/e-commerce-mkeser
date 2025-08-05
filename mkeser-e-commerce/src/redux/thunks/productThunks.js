import axiosInstance from "../../api/axiosInstance";
import {
  setProductList,
  setTotal,
  setFetchState,
} from "../actions/productAction";

// Thunk fonksiyonu: parametrelerle ürünleri getir
export const fetchProducts = (params = {}) => async (dispatch, getState) => {
  dispatch(setFetchState("FETCHING"));

  // State'ten limit ve offset al
  const { limit, offset } = getState().product;

  // Varsayılan parametreleri ekle
  const queryParams = {
    limit,
    offset,
    ...params, // gelen parametreleri üzerine yaz
  };

  // URLSearchParams ile URL formatına çevir
  const queryString = new URLSearchParams(queryParams).toString();

  try {
    const res = await axiosInstance.get(`/products?${queryString}`);
    dispatch(setProductList(res.data.products));
    dispatch(setTotal(res.data.total));
    dispatch(setFetchState("FETCHED"));
    console.log("Ürünler başarıyla alındı:", res.data.products);
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Ürünler alınırken hata oluştu:", error);
  }
};
