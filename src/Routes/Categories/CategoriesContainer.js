import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoriesPresenter from "./CategoriesPresenter";

class CategoriesContainer extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired
  };
  state = {};
  render() {
    const { categories } = this.props;
    return <CategoriesPresenter categories={categories} {...this.state} />;
  }
}

export default CategoriesContainer;
