import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import FeedPage from "./components/FeedPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div><h1>Social Hive</h1></div>
        <Switch>
          <Route exact path="/" component={FeedPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          {/* <Route exact path="/reset_password" component={}></Route>
          <Route exact path="/password/reset/:id/:token" component={}></Route>
          <Route exact path="/feed/:userid" component={}></Route>
          <Route exact path="/profile/:name/:uniqueid" component={}></Route> */}
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
