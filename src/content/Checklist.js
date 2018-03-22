import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/housing/05.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">체크할 사항</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이 도착 후, 게스트하우스에 약 2~3일 머물면서 직접 콘도 및 아파트에
        방문하여 발품을 팔며 본인에게 맞는 집을 찾아야 한다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>1. 본인이 살고 싶은 지역을 먼저 고르고,</b>
        <li>a. 스쿠터 운전이 불가능하다면 올드시티, 산티탐, 님만을 추천</li>
        <li>b. 조용한 동네, 자연을 좋아하고, 가족 단위라면 항동을 추천</li>
        <b>2. 해당 지역에 위치한 콘도 및 아파트를 검색한 후,</b>
        <li>a. 유용한 링크를 참조하여 이메일, 페이스북 메시지 및 전화 연락</li>
        <li>
          b. 직접 동네를 돌아다니면서 광고판을 살피는 것도 방법 3. 직접 방문하여
          아래 내용을 체크한 후 결정한다.
        </li>
        <Box marginTop={5} />
        <Text>
          <b>a. 인터넷 스피드</b>
        </Text>
        <Text>
          <b>b. 온수</b>
        </Text>
        <Text>
          <b>c. 수압</b>
        </Text>
        <Text>
          <b>d. 보증금</b>
        </Text>
        <Text>
          <b>e. 전기요금, 수도요금</b>
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>필자의 경험담</b>
        <Text>
          올드시티, 산티탐, 님만도 나쁘지 않지만 필자는 치앙마이의 자연 그리고
          조용한 동네를 선호하여 항동에 위치한 주택을 6개월간 렌트했다. 치앙마이
          부동산 페이스북 그룹에 (아래 유용한 링크 참조) 집을 찾는다고 원하는
          조건을 자세히 작성하여 게시글을 올리자 순식간에 5~6명의 부동산
          중개인에게서 연락이 와서 약 1주일 동안 함께 집을 보러 다녔다. 약
          대여섯 군데 집을 살펴본 후, 마음에 드는 집을 찾아 순조롭게 계약을
          진행했다. 주택뿐만 아니라 아파트 계약도 진행해 보았는데, 계약 시 가장
          중요한 건 ‘마음씨 좋은 주인장' 이 아닌가 싶다. 다들 좋은 집을 찾기를!
          Good Luck!
        </Text>
      </Text>
    </Box>
  </Fragment>
);
