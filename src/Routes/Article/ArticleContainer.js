import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticlePresenter from "./ArticlePresenter";

class ArticleContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <ArticlePresenter {...this.state} />;
  }
}

export default ArticleContainer;
