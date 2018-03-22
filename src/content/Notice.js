import React, { Fragment } from "react";
import { MaskImage, SLink, Underline } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/transportation/04.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">유의사항</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        스쿠터 렌탈 시 안전이 가장 중요하다. 특히 태국의 경우 한국과 다르게
        좌측통행이 원칙이다. 초반에 이를 헷갈려서 사고가 나는 경우도 빈번하다.
        따라서 초반에는 도로의 맨 좌측에 붙어서 시속 40km 이하로 서행 운전하도록
        하자.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        스쿠터 사고는 하루에도 수십 건씩 일어난다. 개인적으로도 교통사고를
        당했는데 외국인이다 보니 아무래도 불리한 부분이 많았다. 다행히 크게
        다치지 않았지만, 조심하고 또 조심하는 것 잊지 말자. 또한, 최근 관광객이
        급증하면서 도로에 국제운전면허증을 확인하는 경찰관이 늘었다.
        운전면허증을 꼭 가져오자. 면허증이 없을 시 벌금 약 500밧을 내야 한다.
        만약 스쿠터 운전이 불안하다면, 자전거 이용을 추천한다. 게스트하우스 혹은
        호텔에 숙박하는 경우 자전거를 무료, 혹은 하루 50밧에 빌려준다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <li>태국은 좌측통행이 원칙이다.</li>
        <li>불안하면, 그냥 우버 타자.</li>
        <li>국제운전면허증 (없으면 국내 면허증이라도) 가져오자.</li>
      </Text>
      <Box marginTop={5} marginBottom={5}>
        <Text>
          <SLink href="https://goo.gl/A2SYA9">치앙마이 경찰 체크포인트</SLink>
        </Text>
      </Box>
    </Box>
  </Fragment>
);
