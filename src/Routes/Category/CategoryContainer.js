import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoryPresenter from "./CategoryPresenter";

class CategoryContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <CategoryPresenter {...this.state} />;
  }
}

export default CategoryContainer;
