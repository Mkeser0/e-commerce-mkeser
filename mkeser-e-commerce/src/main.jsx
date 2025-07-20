import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/SettingContext.jsx";
import { myStore } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </Provider>
);
