import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const Airport = () => (
  <Fragment>
    <MaskImage photo={require("../assets/preparation/04.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">도착 직후</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이 공항은 작으며, 시내에서 약 20분 거리로 가까운 곳에 있다. 또한
        공항 내에 무료 와이파이가 있기 때문에 연결해서 우버를 부를 수 있다. 도착
        직후 너무 늦은 시간이 아니라면, (1) 심 카드를 구입하고, (2) ATM 기기에서
        태국 돈을 인출한 후 (3) 공항 와이파이 혹은 데이터 연결하여 우버를 불러서
        숙소로 이동하면 된다. 공항 택시도 나쁘지 않으나, 우버가 약간 더
        저렴하다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이 공항에서 제공하는 무료 와이파이를 이용하려면 여권번호 등 정보를
        입력하면 연결하여 와이파이를 이용할 수 있다. 오후 6시 이후 늦게
        치앙마이에 도착하는 경우, 공항의 심 카드 판매대가 문을 닫으니 참고하자.
      </Text>
    </Box>
  </Fragment>
);

export default Airport;
