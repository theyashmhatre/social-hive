import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import FeedPage from "./components/core/FeedPage";
import PrivateRoute from './components/auth/helpers/PrivateRoutes'
import './index.css';
import RegisterPage from "./components/auth/RegisterPage";
const Routes = () => {
  return (
    <BrowserRouter>
    
      <Switch>
        <PrivateRoute path="/" exact component={FeedPage}/>
        <Route path="/signup" exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
