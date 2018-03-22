import React from "react";
import PropTypes from "prop-types";
import Visa from "content/Visa";

const ArticlePresenter = ({ title }) => {
  switch (title.toLowerCase()) {
    case "비자":
      return <Visa />;
    default:
      break;
  }
};

ArticlePresenter.propTypes = {
  title: PropTypes.oneOf(["비자", "Stuff"])
};

export default ArticlePresenter;
