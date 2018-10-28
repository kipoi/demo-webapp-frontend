import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
}

export default Routes;
