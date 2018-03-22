import React from "react";
import PropTypes from "prop-types";
import Visa from "content/Visa";
import ATMS from "content/ATMS";
import Weather from "content/Weather";
import Airport from "content/Airport";
import Simcard from "content/Simcard";
import Uber from "content/Uber";
import TukTuk from "content/TukTuk";
import Scooter from "content/Scooter";

const ArticlePresenter = ({ title }) => {
  switch (title.toLowerCase()) {
    case "비자":
      return <Visa />;
    case "환전":
      return <ATMS />;
    case "날씨":
      return <Weather />;
    case "도착 직후":
      return <Airport />;
    case "심카드":
      return <Simcard />;
    case "우버 - 그렙":
      return <Uber />;
    case "쏭태우 - 툭툭":
      return <TukTuk />;
    case "스쿠터 렌탈":
      return <Scooter />;
    default:
      break;
  }
};

ArticlePresenter.propTypes = {
  title: PropTypes.oneOf([
    "비자",
    "환전",
    "날씨",
    "도착 직후",
    "심카드",
    "우버 - 그렙",
    "쏭태우 - 툭툭",
    "스쿠터 렌탈"
  ])
};

export default ArticlePresenter;
