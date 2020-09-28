import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "./components/core/FeedPage";
import PrivateRoute from './components/auth/helpers/PrivateRoutes'
import './index.css';
import RegisterPage from "./components/auth/RegisterPage";
import SigninPage from "./components/auth/SigninPage";
const Routes = () => {
  return (
    <BrowserRouter>
    
      <Switch>
        <PrivateRoute path="/" exact component={FeedPage}/>
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/register" exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
