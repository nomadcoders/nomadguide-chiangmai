import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/food/04.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">마켓</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        오후 5시부터 10시까지 열리는 나이트 마켓, 아침 일찍 오전 8시부터 열리는
        모닝 마켓, 파머스 마켓까지! 치앙마이에는 정말 여러 종류의 마켓들이 있다.
        마켓에서 다양한 먹거리뿐만 아니라 수공예품, 핸드메이드 제품들을 구입할
        수 있으니 꼭 방문해보자.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>선데이 마켓 (Sunday Market):</b>
        <Text inline={false}>
          <br />
          매주 일요일 저녁 5시부터, 치앙마이 올드시티 타페게이트
          <br />
          치앙마이의 대표적인 마켓. 음식부터 시작하여 다양한 옷, 수공예품,
          선물용 상품 등을 구입할 수 있다. 꽤나 사람이 많고 혼잡하다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/sBk3xXhxSTG2">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>마야몰 야시장 (Maya Night Market):</b>
        <Text inline={false}>
          <br />
          매주 수, 목, 금 저녁 5시부터, 님만 마야몰 앞
          <br />
          팟타이와 같은 길거리 음식 먹으며 쇼핑하기 편하다. 선데이 마켓처럼
          혼잡하지 않아서 좋다. 님만 근처에 푸드 트럭도 많아서 살펴보는 것도
          재미!
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/5yCTsDDRCbU2">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>반캉왓 모닝 마켓 (Morning Market at Bann Kang Wat):</b>
        <Text inline={false}>
          <br />
          매주 일요일 오전 8시부터, 예술인 마을 반캉왓 내부
          <br />
          선데이 마켓보다 품질 좋고 특이한 옷, 수공예품을 볼 수 있다. 건강한
          먹거리도 판매한다. 혼잡하지 않아서, 일찍 일어날 수 있다면 (오전 8시!)
          반캉왓 모닝 마켓을 추천!
        </Text>
        <br />
        <SLink href="https://www.facebook.com/marketbannkangwat">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>와로롯 마켓 (Warorot Market):</b>
        <Text inline={false}>
          <br />
          매일 아침 일찍 열고, 오후 5시쯤 일찍 닫는다, 나이트 바자 근처
          <br />
          치앙마이의 ‘동대문 시장' 선데이 마켓이 관광객들을 위한 곳이라면,
          와로롯 마켓은 현지인들을 위한 곳이다. 혼잡하고 깔끔하지는 않지만, 더
          저렴하고 다양한 온갖 제품 (음식, 옷, 수공예품, 등등) 들을 발굴 할 수
          있다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/a3zvUyVy2EL2">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>징자이 파머스 마켓 (Jing Jai Market Chiang Mai):</b>
        <Text inline={false}>
          <br />
          매월 첫번째, 세번째 일요일 오전 7시부터
          <br />
          치앙마이의 대표적인 농민 시장, 말 그대로 농부들이 직접 기른 농작물,
          건강한 먹거리를 판매한다. 마찬가지로 특색있는 제품들을 발견할 수 있고,
          혼잡하지 않기에 추천!
        </Text>
        <br />
        <SLink href="https://www.facebook.com/jjmarketchiangmai">Website</SLink>
      </Text>
    </Box>
  </Fragment>
);
