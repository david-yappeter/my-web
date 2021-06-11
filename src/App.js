import React from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Profile from "./Components/Pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/profile" children={<Profile />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
