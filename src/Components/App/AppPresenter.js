import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Switch, Route } from "react-router-dom";
import Categories from "Routes/Categories";
import Category from "Routes/Category";
import Article from "Routes/Article";

const AppPresenter = ({ categories }) => (
  <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Categories categories={categories} />}
      />
      <Route path={"/categories/:name"} component={Category} />
      <Route path={"/articles/:name"} component={Article} />
    </Switch>
  </HashRouter>
);

AppPresenter.propTypes = {
  categories: PropTypes.array.isRequired
};

export default AppPresenter;
