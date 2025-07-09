// App.js
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/product/:id" exact component={ProductDetailPage} />
        {/* Add more routes as needed */}

        {/* Fallback route for 404 Not Found */}
        <Route path="*" render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </>
  );
}

export default App;
