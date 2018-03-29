import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/food/02.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">현지 식당</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        아마 동네를 돌아다니다 보면 허름하게 생긴 식당, 마켓들을 많이 발견할 수
        있을 것이다. 현지인들이 주로 점심이나 저녁을 해결하는 동네 식당이다.
        쏨땀 30밧, 찹쌀밥 10밧, 무삥 10밧을 사면서 끼니도 해결하고, 동네 식당
        아저씨와 친해질 수도 있다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        주요 메뉴
        <li style={{ marginBottom: 10 }}>
          <b>카오 팟 (Khao Phat):</b> 태국식 볶음밥, ‘카오'는 쌀, ‘팟'은
          볶는다를 뜻한다. 닭고기가 들어가면 카오 팟 카이, 돼지고기가 들어가면
          카오 팟 무, 새우가 들어가면 카오 팟 꿍이다.
        </li>
        <li style={{ marginBottom: 10 }}>
          <b>카오 소이 (Khao Soi):</b> 태국 북부의 대표 음식. 코코넛 밀크가
          들어간 국수.
        </li>
        <li style={{ marginBottom: 10 }}>
          <b>팟뿡 (Pak Boong / Morning Glory):</b> 공심채 볶음. 태국의 시금치
          볶음이다.
        </li>
        <li style={{ marginBottom: 10 }}>
          <b>찰밥 (Sticky Rice):</b> 태국 북부에서는 밥 보다, 찰밥을 더 자주
          먹는다.
        </li>
        <li style={{ marginBottom: 10 }}>
          <b>쏨땀 (Som Tam):</b> 태국의 김치. 파파야 샐러드라고도 한다.
          아삭하면서 매콤한 식감때문에 김치처럼 자주 먹는다.
        </li>
        <li style={{ marginBottom: 10 }}>
          <b>까이양 (Kai Yang):</b> 훈제로 구운 닭고기. 고소한 까이양, 찰밥,
          쏨땀을 맥주 한잔과 함께 꼭 같이 먹어보기 바란다.
        </li>
        <li style={{ marginBottom: 10 }}>
          <b>무삥 (Moo Ping):</b> 돼지고기 꼬치구이, 동네 골목마다 숯불에
          돼지고기, 닭고기 꼬치를 팔고 있다. 간식으로도 한 끼 식사로도 든든하다.
        </li>
      </Text>
    </Box>
  </Fragment>
);
