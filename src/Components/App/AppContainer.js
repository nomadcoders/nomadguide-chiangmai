import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import { injectGlobal } from "styled-components";
import Categories from "../../content/categories";

const baseStyles = () => injectGlobal`
  ${require("../../reset.css")};
  ${require("gestalt/dist/gestalt.css")};
  body{
    margin-top:60px!important;
  }
  a{
    text-decoration:none!important;
    color:inherit;
  }
`;

class AppContainer extends Component {
  render() {
    baseStyles();
    return (
      <AppPresenter
        categories={Object.keys(Categories).map(
          category => Categories[category]
        )}
      />
    );
  }
}

export default AppContainer;
