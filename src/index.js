import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
// import Components from "views/Components/Components.js";
import ViewUsers from "views/ViewUsers/ViewUsers.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/ViewUsers" component={ViewUsers} />
      <Route path="/profile-page" component={ProfilePage} />
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/" component={ViewUsers} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
