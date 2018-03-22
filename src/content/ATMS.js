import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const ATMS = () => (
  <Fragment>
    <MaskImage photo={require("../assets/preparation/02.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">환전</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        태국 돈을 준비하는 방법은 크게 3가지가 있다. (1) 미리 환전해서 들고 가기
        (2) 한화 혹은 미국달러를 태국 환전소에서 환전하기 (3) ATM 기기에서
        인출하기. 추천하는 방법은 비상시를 대비하여 한화 혹은 미국달러를
        현금으로 어느 정도 (약 2~30만원) 챙겨가고, 태국 ATM기기에서 사용 가능한
        국제현금카드를 챙겨오자.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이 공항에 내리자마자 보이는 ATM기기에서 1만 5천밧에서 최대
        3만밧까지 (은행마다 한도가 다르다) 태국 현지화를 인출할 수 있다. 인출할
        때마다 최대 220밧까지 수수료를 내야 하므로 유의하자. ATM 기기는 치앙마이
        전 지역에서 아주 쉽게 발견할 수 있다.
      </Text>
    </Box>
    <MaskImage photo={require("../assets/articles/atm.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이에서 환전을 해야한다면 Super Rich Money Exchange를 강력
        추천한다. 수수료 없이, 최고의 Rate로 환전이 가능하다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="http://www.superrichchiangmai.com">
          - Super Rich Money Exchange
        </SLink>
      </Text>
      <Box marginTop={2}>
        <Text>- 운영시간: 오전 8시 - 오후 10시</Text>
      </Box>
    </Box>
  </Fragment>
);

export default ATMS;
