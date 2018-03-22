import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/housing/02.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">콘도</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        콘도 혹은 레지던스라고 한다. 치앙마이에서 콘도는 한국의 풀 옵션 럭셔리
        아파트를 뜻한다. 거실, 방, 부엌, 화장실을 갖춘 원룸 (혹은 방 2~3개)
        아파트를 렌트하는 형태며 단지 내의 옵션으로 따라오는 수영장 혹은
        체육시설을 사용할 수 있다. 또한, 사설 경비원이 상시 거주하기 때문에
        안전하다. 보통 3개월 기준으로 렌트 할 수 있으며 가격대는 한 달 기준
        10,000밧 ~ 20,000밧 사이이며 위치에 따라 가격대가 바뀐다. (전기 및
        수도요금 별도) 대다수의 노마드들은 님만, 산티탐에 위치한 콘도에
        거주한다.
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
          <b>가격대:</b> 10,000밧 ~ 20,000밧 (전기 및 수도요금 별도, 약 800밧
          내외)
        </li>
        <li>
          <b>시설:</b> 거실, 방, 부엌, 화장실 + 수영장 혹은 체육시설 내외)
        </li>
        <li>
          <b>지역:</b> 님만, 산티탐, 창푸억
        </li>
        <li>
          <b>계약기준:</b> 3개월, 최근 1개월 계약 가능한 콘도가 급증하고 있다.
          있다.
        </li>
        <li>
          <b>보증금:</b> 1개월 월세
        </li>
      </Text>
    </Box>
  </Fragment>
);
