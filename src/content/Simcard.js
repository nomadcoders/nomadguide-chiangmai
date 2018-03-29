import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const Simcard = () => (
  <Fragment>
    <MaskImage photo={require("../assets/preparation/05.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">심카드</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        심카드는 공항뿐만 아니라 편의점 (세븐일레븐)에서 손쉽게 구입할 수 있다.
        심카드 구매 시 여권을 반드시 지참하여야 하니까 잊지 말자! 공항에서
        구입하면 재빠르게 심 카드 교체 및 연결까지 한 번에 해주지만, 만약 너무
        늦게 도착해서 공항에서 사지 못했다면 편의점에서 Tourist Sim Card를 사면
        된다.
      </Text>
    </Box>
    <MaskImage photo={require("../assets/articles/sim.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Text>- 구입처: 공항 및 편의점</Text>
      <Box marginTop={2}>
        <Text>- 통신사: True, AIS, dtac 등 다수</Text>
      </Box>
      <Box marginTop={2}>
        <Text>- 종류: Tourist Sim card 7일 / 한 달/ 본인 취향에 맞게 구매</Text>
      </Box>
      <Box marginTop={2}>
        <Text>- 구입시 여권 지참 필수</Text>
      </Box>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        패키지 구입 후 인터넷 데이터를 다 소진했다면 근처의 세븐 일레븐에서 충전
        (탑업 Top-up)하면 된다. 탑업하고 싶다고 이야기하고 통신사, 전화번호를
        알려준 후 충전하고 싶은 만큼의 금액을 낸다. 각 통신사마다 제공하는
        인터넷 패키지가 있으니 이에 맞게 충전하도록 하자. 예를 들면, True
        통신사의 경우 399밧을 내면 한 달 동안 4기가 데이터를 사용할 수 있다.
        True Move Topping Package 를 확인 후 400밧을 탑업하고 패키지 적용 후
        사용하도록 하자. 그냥 패키지 없이 사용 시 충전한 돈이 순식간에 사라지는
        기적 (?)을 체험할 수 있다.
      </Text>
    </Box>
  </Fragment>
);

export default Simcard;
