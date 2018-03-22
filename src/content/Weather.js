import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const ATMS = () => (
  <Fragment>
    <MaskImage photo={require("../assets/preparation/03.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">날씨</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이 기후는 건기, 우기로 나뉜다. 태국 치앙마이를 방문하기 가장 좋은
        기간은 건기인 11월부터 2월까지이다. 사실 나머지 기간도 날씨가 좋은
        편이다. 3~5월까지 더워지고, 그 이후 비가 오면서 극심한 더위도 한풀
        꺾인다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>- 방문하기 최고 시즌: 11월~2월 (평균 23도)</Text>
      <Box marginTop={2}>
        <Text>- 가장 더운 시즌: 3월~5월 (평균 36도)</Text>
      </Box>
      <Box marginTop={2}>
        <Text> - 가장 비가 많이 오는 시즌: 8~9월</Text>
      </Box>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        가장 추운 1월에도 낮에는 대략 20도를 유지하기에 반팔, 반바지는 필수!
        그러나, 실내에서 워낙 에어콘을 빵빵 틀어대기에 가벼운 재킷, 가디건,
        긴바지도 챙겨가자.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5} />
  </Fragment>
);

export default ATMS;
