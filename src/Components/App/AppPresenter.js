import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Switch, Route } from "react-router-dom";
import Categories from "Routes/Categories";
import Category from "Routes/Category";

const AppPresenter = ({ categories }) => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Categories categories={categories} />}
      />
      <Route path={"/categories/:name"} component={Category} />
    </Switch>
  </HashRouter>
);

AppPresenter.propTypes = {
  categories: PropTypes.array.isRequired
};

export default AppPresenter;
