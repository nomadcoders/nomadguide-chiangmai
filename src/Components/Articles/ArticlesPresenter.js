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
import Notice from "content/Notice";
import Map from "content/Map";
import Condo from "content/Condo";
import Apartment from "content/Apartment";
import House from "content/House";
import Checklist from "content/Checklist";
import Links from "content/Links";

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
    case "유의사항":
      return <Notice />;
    case "지도":
      return <Map />;
    case "콘도":
      return <Condo />;
    case "아파트":
      return <Apartment />;
    case "주택":
      return <House />;
    case "체크할 사항":
      return <Checklist />;
    case "유용한 링크":
      return <Links />;
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
    "스쿠터 렌탈",
    "유의사항",
    "지도",
    "아파트",
    "주택",
    "체크할 사항",
    "유용한 링크"
  ])
};

export default ArticlePresenter;
