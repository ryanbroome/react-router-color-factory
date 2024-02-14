import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import ColorGlory from "./ColorGlory";
import NotFound from "./NotFound";
import ColorForm from "./ColorForm";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/colors">
        <ColorList />
      </Route>

      <Route
        exact
        path="/colors/new">
        <ColorForm />
      </Route>

      <Route
        exact
        path="/colors/:color">
        <ColorGlory />
      </Route>

      <Route to="*">
        <NotFound />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
