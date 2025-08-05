import axios from "axios";
import { setCategories, setFetchState } from "../actions/productAction";
import axiosInstance from "../../api/axiosInstance";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setFetchState("LOADING"));
    try {
      const res = await axiosInstance.get("/categories");
      dispatch(setCategories(res.data));
      console.log("API'den gelen veri:", res.data);
      dispatch(setFetchState("SUCCESS"));
    } catch (error) {
      console.error("Kategori verisi çekilemedi:", error);
      dispatch(setFetchState("ERROR"));
    }
  };
};
