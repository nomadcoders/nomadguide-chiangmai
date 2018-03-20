import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoriesPresenter from "./CategoriesPresenter";

class CategoriesContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <CategoriesPresenter {...this.state} />;
  }
}

export default CategoriesContainer;
