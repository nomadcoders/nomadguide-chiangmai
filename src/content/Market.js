import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
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
        <li>
          <b>가격대:</b> 최소 20,000 밧 이상.
        </li>
        <li>
          <b>시설:</b> 방 (2~4개), 거실, 부엌, 정원 등.
        </li>
        <li>
          <b>지역:</b> 항동.
        </li>
        <li>
          <b>계약기준:</b> 최소 6개월 이상.
        </li>
        <li>
          <b>보증금:</b> 1개월 월세.
        </li>
      </Text>
    </Box>
  </Fragment>
);
