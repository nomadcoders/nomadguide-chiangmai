import React from "react";
import PropTypes from "prop-types";
import Stuff from "content/Stuff";

const ArticlePresenter = ({ title }) => {
  switch (title.toLowerCase()) {
    case "stuff":
      return <Stuff />;
    default:
      break;
  }
};

ArticlePresenter.propTypes = {
  title: PropTypes.oneOf(["atms", "Stuff"])
};

export default ArticlePresenter;
