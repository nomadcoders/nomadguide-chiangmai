import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/tips/04.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">마지막으로</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        노마드 가이드는 ‘맛집' ‘카페' 리스트 위주의 관광, 투어 가이드가 아닌,
        실제로 최소 한 달 살기 위해 방문하는 이들을 위해서 집 구하기, 스쿠터
        렌탈 등 현실적인 조언 중심으로 작성했다. 모든 정보와 자료는 2018년도 1월
        기준으로 작성되었다. 참, 또한 이는 100퍼센트 필자의 취향과 의견이 반영된
        지극히 주관적인 가이드이므로 딴지는 정중히 사양한다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        필자는 치앙마이에서 요가, 타이 마사지, 무에타이, 퍼머컬쳐 등 너무나 많은
        것들을 배웠고, 마침내 원하는 곳에서 일하고 살 수 있는 자유를 얻게
        되었다. 치앙마이를 방문하는 모든 이들 또한 아름다운 이곳에서 최대한 많은
        것을 배우고, 경험하고, 또한 나눌 수 있게 되기를 기대한다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">이걸 만든 사람은?</Heading>
      <Text>
        <br />
        노마드 코더 Nomad Coders, 2015년부터 노마딩을 시작한 린과 니꼴라스의
        프로젝트 그룹이다. 온라인, 오프라인으로 코딩을 가르치며, 매월 한개씩
        새로운 서비스를 만들고 있다. 노마드 가이드는 앞으로도 꾸준히 치앙마이
        내용 및 다른 도시 가이드도 업데이트 할 예정이니 뉴스레터 가입 바란다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>웹 사이트:</b>
        <br />
        <SLink href="https://nomadcoders.co/">https://nomadcoders.co/</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>페이스북:</b>
        <br />
        <SLink href="https://www.facebook.com/nomadcoders/">
          https://www.facebook.com/nomadcoders/
        </SLink>
      </Text>
    </Box>
  </Fragment>
);
