import React, { Component } from "react";
import PropTypes from "prop-types";
import AppPresenter from "./AppPresenter";
import { injectGlobal } from "styled-components";
import Categories from "../../content/categories";

const baseStyles = () => injectGlobal`
  ${require("../../reset.css")};
  ${require("gestalt/dist/gestalt.css")};
  body{
    margin-top:60px;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

class AppContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    baseStyles();
    return (
      <AppPresenter
        categories={Object.keys(Categories).map(
          category => Categories[category]
        )}
        {...this.state}
      />
    );
  }
}

export default AppContainer;
