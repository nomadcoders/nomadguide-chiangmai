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
import Restaurants from "content/Restaurants";
import LocalShops from "content/LocalShops";
import Supermarket from "content/Supermarket";
import Market from "content/Market";
import Coworking from "content/Coworking";
import Cafe from "content/Cafe";
import NomadCommunity from "content/NomadCommunity";
import YogaCommunity from "content/YogaCommunity";
import DevCommunity from "content/DevCommunity";
import OtherCommunity from "content/OtherCommunity";
import Basic from "content/Basic";
import Monthly from "content/Monthly";
import Hospital from "content/Hospital";
import Cost from "content/Cost";
import Us from "content/Us";

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
    case "레스토랑":
      return <Restaurants />;
    case "현지 식당":
      return <LocalShops />;
    case "슈퍼마켓":
      return <Supermarket />;
    case "마켓":
      return <Market />;
    case "코워킹 스페이스":
      return <Coworking />;
    case "카페":
      return <Cafe />;
    case "노마드 커뮤니티":
      return <NomadCommunity />;
    case "개발자 커뮤니티":
      return <DevCommunity />;
    case "요가 커뮤니티":
      return <YogaCommunity />;
    case "그 외":
      return <OtherCommunity />;
    case "기본 태국어":
      return <Basic />;
    case "월별 치앙마이 즐기기":
      return <Monthly />;
    case "병원":
      return <Hospital />;
    case "한달살기 비용":
      return <Cost />;
    case "마지막으로":
      return <Us />;
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
    "유용한 링크",
    "레스토랑",
    "현지 식당",
    "슈퍼마켓",
    "마켓",
    "코워킹 스페이스",
    "카페",
    "노마드 커뮤니티",
    "개발자 커뮤니티",
    "요가 커뮤니티",
    "그 외",
    "기본 태국어",
    "월별 치앙마이 즐기기",
    "병원",
    "한달살기 비용",
    "마지막으로"
  ])
};

export default ArticlePresenter;
