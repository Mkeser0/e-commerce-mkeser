// src/contexts/settingsContext.jsx
import React from "react";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// 1. Context oluştur
export const userContext = createContext();

// 2. Provider bileşeni oluştur
export const UserContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products")
      .then((res) => {
        setData(res.data.products);
        console.log("Data fetched successfully:", res.data);
      })
      .catch((err) => console.log("Login error:", err.message));
  }, []);

  return (
    <userContext.Provider value={{ data }}>{children}</userContext.Provider>
  );
};
