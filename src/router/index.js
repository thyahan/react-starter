import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import configs from "./config";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        {configs.map((config) => (
          <Route {...config} exact={config.exact === false ? false : true} />
        ))}
      </Switch>
    </Router>
  );
};
export default RouterComponent;
