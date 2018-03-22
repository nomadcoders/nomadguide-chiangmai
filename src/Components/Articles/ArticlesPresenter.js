import React from "react";
import PropTypes from "prop-types";
import Visa from "content/Visa";
import ATMS from "content/ATMS";

const ArticlePresenter = ({ title }) => {
  switch (title.toLowerCase()) {
    case "비자":
      return <Visa />;
    case "환전":
      return <ATMS />;
    default:
      break;
  }
};

ArticlePresenter.propTypes = {
  title: PropTypes.oneOf(["비자", "환전"])
};

export default ArticlePresenter;
