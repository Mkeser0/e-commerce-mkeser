// src/contexts/settingsContext.jsx
import React from "react";
import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import { data } from "../data";

// 1. Context oluştur
export const userContext = createContext();

// 2. Provider bileşeni oluştur
export const UserContextProvider = ({ children }) => {
  /*
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log("Data fetched successfully:", res.data);
      })
      .catch((err) => console.log("Login error:", err.message));
  }, []);
  */

  return (
    <userContext.Provider value={{ data }}>{children}</userContext.Provider>
  );
};
