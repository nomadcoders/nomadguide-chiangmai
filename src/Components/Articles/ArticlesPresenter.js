import React from "react";
import PropTypes from "prop-types";
import Visa from "content/Visa";
import ATMS from "content/ATMS";
import Weather from "content/Weather";

const ArticlePresenter = ({ title }) => {
  switch (title.toLowerCase()) {
    case "비자":
      return <Visa />;
    case "환전":
      return <ATMS />;
    case "날씨":
      return <Weather />;
    default:
      break;
  }
};

ArticlePresenter.propTypes = {
  title: PropTypes.oneOf(["비자", "환전", "날씨"])
};

export default ArticlePresenter;
