import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Switch, Route } from "react-router-dom";
import Categories from "Routes/Categories";

const AppPresenter = ({ categories }) => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Categories categories={categories} />}
      />
    </Switch>
  </HashRouter>
);

AppPresenter.propTypes = {
  categories: PropTypes.array.isRequired
};

export default AppPresenter;
