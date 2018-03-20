import React, { Component } from "react";
import PropTypes from "prop-types";
import AppPresenter from "./AppPresenter";

const Categories = [
  {
    name: "Preparation",
    description: "Be prepared",
    background: "categories/category.jpg"
  }
];

class AppContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <AppPresenter categories={Categories} {...this.state} />;
  }
}

export default AppContainer;
