import React, { Component } from "react";
import ArticlePresenter from "./ArticlePresenter";

class ArticleContainer extends Component {
  render() {
    const { match: { params } } = this.props;
    return <ArticlePresenter title={params.name} />;
  }
}

export default ArticleContainer;
