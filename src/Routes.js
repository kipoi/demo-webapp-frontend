import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import Results from "./containers/Results/Results";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/results" component={Results}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
}

export default Routes;
