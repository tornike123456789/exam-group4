import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import CommentsPage from "./pages/CommentsPage";
import Header from "./components/Header";
import history from "./utils/history";

import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/comments" component={CommentsPage} />
    </Router>
  );
};

export default App;
