import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/tips/02.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">병원</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        아프면 본인만 손해다. 병원은 안 가는 것이 가장 좋다. 태국 병원에 실제로
        하루 입원해본 필자의 경험에 따르면 추천하고 싶지않다. 급성 식중독으로
        하루 입원 했었고, 오토바이 사고로 병원을 방문했었다. 그러나, 둘 다
        엄청난 비용을 청구 받았고 (약 1만밧), 약은 효용이 없었다. 물론 개인마다
        경험은 천차만별이다. 그러나 주변에서도 태국 병원을 신뢰하는 듯한 인상은
        얻기 힘들었다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        따라서, 한국에서 각자 개인 비상약을 챙기기 바란다. 굳이 방문을 해야
        한다면 약국 방문을 먼저 하고, 그 이후에도 차도가 없다면, 아래 병원을
        방문하도록 하자. 약국은 주로 편의점 옆, 혹은 대형 슈퍼마켓, 마야몰과
        같은 백화점 내부에서 쉽게 발견할 수 있다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Chiang Mai Ram Hospital:</b>
        <br />
        <SLink href="http://www.chiangmairam.com/">Website</SLink>
      </Text>
    </Box>
  </Fragment>
);
