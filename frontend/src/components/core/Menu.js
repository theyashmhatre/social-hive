import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated } from '../auth/helpers/index'
import send from './send.svg';
import home from './home.svg';
import like from './heart.svg';
import user from './user.svg';

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};


const Menu = () => (
 
  <nav className="navbar justify-content-center navbar-expand">
  <div className="container">
    <div className="navbar-header">
    <Link style={currentTab(history, "/")} className="nav-link" to="/">Social Hive  </Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item"><Link style={currentTab(history, "/")} className="nav-link" to="/signup"><img src={home} className="icon"></img></Link></li>
      <li className="nav-item"><Link style={currentTab(history, "/")} className="nav-link" to="/signup"><img src={send} className="icon"></img></Link></li>
      <li className="nav-item"><Link style={currentTab(history, "/")} className="nav-link" to="/signup"><img src={like} className="icon"></img></Link></li>
      <li className="nav-item"><Link style={currentTab(history, "/")} className="nav-link" to="/signup"><img src={user} className="icon"></img></Link></li>
    </ul>
  </div>
</nav>

);



export default withRouter(Menu);

