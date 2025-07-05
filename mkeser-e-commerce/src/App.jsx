// App.js
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </>
  );
}

export default App;
