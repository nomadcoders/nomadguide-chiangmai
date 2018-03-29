import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/tips/03.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">한달살기 비용</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        생활비의 절반은 결국 집 렌트비용이기에 어느 지역에서 어떤 옵션의 집을
        구하느냐에 따라서 생활비 역시 천차만별이다. 대략 감을 잡기 위해서 아래와
        같이 비용을 계산해보았다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <li>
          <b>산티탐 콘도:</b> 한 달 10,000밧
        </li>
        <li>
          <b>오토바이 렌탈:</b> 한 달 2,500밧
        </li>
        <li>
          <b>하루 식사:</b> 한끼 평균 100밧 (한 달 9,000밧)
        </li>
        <li>
          <b>카페 혹은 코워킹스페이스: </b> 하루 평균 100밧 (한 달 3,000밧)
        </li>
        <li>
          <b>그외 기타 비용:</b> 한 달 5,000밧
        </li>
        <Text>
          <br />
          <b>한달 약 30,000밧 (한화 약 99만원)</b>
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        생활비는 개인적으로 어디서, 얼마나, 어떻게 생활하는지에 따라서
        가격차이가 심하다. 필자의 경우 최소 한 달 30만원 정도의 경비로 생활한
        적도 있다! 그러나 그러한 필자도 치앙마이에 처음 도착한 당시에는 한 달 약
        100만원 정도를 지출했다.
      </Text>
    </Box>
  </Fragment>
);
