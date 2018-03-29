import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/housing/03.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">아파트</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        콘도와 달리 아파트는 저렴하고 단촐한 편이다. 부엌, 조리시설이 없으며,
        간단한 방과 화장실이 구비되어있다고 생각하면 된다. 치앙마이 대학교
        근처에 대학생들이 거주하는 아파트가 많다. 현지인들이 거주하기에 계약
        기간도 3개월 기준이며 한 달 렌트비는 3,000밧 ~ 6,000밧 사이로 저렴한
        편이다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        만약 3개월 이하로 거주할 경우 (한 달 살기의 경우), 경우에 따라 콘도
        계약보다는 에어비앤비, 게스트하우스, 호텔 장기거주가 간편할 수 있다.
        먼저 3~4일 거주해보면서 마음에 드는 경우 주인장과 협상하여 한 달 거주
        가격을 흥정하면 된다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <li>
          <b>가격대:</b> 3,000밧 ~ 6,000밧 (전기 및 수도요금 별도, 약 800밧
          내외)
        </li>
        <li>
          <b>시설:</b> 방, 화장실
        </li>
        <li>
          <b>지역:</b> 산티탐, 치앙마이 대학교 근처
        </li>
        <li>
          <b>계약기준:</b> 최소 3개월.
        </li>
        <li>
          <b>보증금:</b> 1개월 월세
        </li>
      </Text>
    </Box>
  </Fragment>
);
