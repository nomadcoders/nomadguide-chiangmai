import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoryPresenter from "./CategoryPresenter";

class CategoryContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    const { match: { params } } = this.props;
    return <CategoryPresenter title={params.name} {...this.state} />;
  }
}

export default CategoryContainer;
