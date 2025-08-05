// App.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Contact from "./pages/Contact";
import PersonnelPage from "./pages/PersonnelPage";
import AboutUs from "./pages/AboutUs";
import SignUpPage from "./pages/SignUpPage";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId?"
          exact
          component={ShopPage}
        />
        <Route path="/product/:id" exact component={ProductDetailPage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/team" exact component={PersonnelPage} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/signin" exact component={SignIn} />
        {/* Add more routes as needed */}

        {/* Fallback route for 404 Not Found */}
        <Route path="*" render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </>
  );
}

export default App;
