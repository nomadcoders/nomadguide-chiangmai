import React, { Component } from "react";
import PropTypes from "prop-types";
import AppPresenter from "./AppPresenter";
import { injectGlobal } from "styled-components";

const baseStyles = () => injectGlobal`
  ${require("../../reset.css")};
  ${require("gestalt/dist/gestalt.css")};
`;

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
    baseStyles();
    return <AppPresenter categories={Categories} {...this.state} />;
  }
}

export default AppContainer;
