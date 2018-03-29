import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/community/01.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">주택</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        태국 현지인들이 가족 단위로 거주하는 주택을 무반 (Moo Baan)이라고 한다.
        방 2~4개, 거실, 부엌, 조리시설, 정원, 주차장이 있다. 주택의 경우 최소
        계약 기간이 6개월이며 위치도 시내에서 떨어진 항동에 위치하여 있다. 가족
        단위로 치앙마이에 거주하는 외국인들의 경우 국제학교 인근에 있는 주택
        단지 (village, gated community)에 모여 산다. 주택 단지의 경우 사설
        경비원 그리고 수영장 및 체육시설을 갖추고 있다. 한 달 렌트비는 계약
        기간에 따라 상이하나 보통 20,000밧부터 시작한다.
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
