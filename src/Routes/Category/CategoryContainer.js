import React, { Component } from "react";
import CategoryPresenter from "./CategoryPresenter";

class CategoryContainer extends Component {
  render() {
    const { match: { params } } = this.props;
    return <CategoryPresenter title={params.name} />;
  }
}

export default CategoryContainer;
