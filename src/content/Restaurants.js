import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/food/01.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">레스토랑</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이 올드시티, 님만에는 외국인 관광객을 위한 수많은 레스토랑이
        위치하여 있다. 태국 식당은 물론이거니와 채식주의자들을 위한 비건
        레스토랑, 무슬림을 위한 할랄 레스토랑까지 다양한 옵션이 가능하다.
        “치앙마이 맛집”을 검색하면 수두룩한 리스트가 쏟아진다. 여기서는 필자가
        엄선한 치앙마이 특유의 ‘건강한 맛집'을 딱 5개만 추천하겠다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Pun Pun</b>
        <Text>
          건강한 오거닉 레스토랑, 퍼머컬쳐 농장에서 직접 기른 농작물로 음식을
          만든다. 레스토랑 옆에 오거닉 화장품, 비건 쿠키를 파는 작은 숍도
          운영하고 있다. 추천메뉴는 스무디, 랩, 부리또 그리고 스무디!
        </Text>
        <SLink href={"http://www.punpunthailand.org/index1766.html?page_id=21"}>
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Food 4 Thought</b>
        <Text>
          건강한 오거닉 레스토랑과 카페. 가격이 다소 비싸지만 양이 푸짐하고
          맛있다. 비트코인 밋업을 포함한 다양한 밋업이 여기서 열리기도 한다.
          추천메뉴는 스무디, 랩 그리고 아보카도 후라이!
        </Text>
        <SLink href={"https://www.facebook.com/Food4ThoughtCM/"}>Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Din Dee Mudhouse Cafe</b>
        <Text>
          일본 감성의 귀여운 오거닉 레스토랑. 직접 지은 흙집 (mudhouse) 에서
          운영하는 카페 겸 레스토랑이다. 인테리어가 매우 독특하고 아기자기하다.
          일본인 주인장의 감성을 느낄 수 있다.
        </Text>
        <SLink href={"http://www.dindeecafe.com/"}>Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Street Pizza & the wine house</b>
        <Text>
          치앙마이 최고의 피자집이다. 인테리어도 특이하고 꽤 넓다. 테라스에서
          와인을 홀짝이며 피자를 먹다 보면 여기가 치앙마이인지 유럽인지
          헷갈린다. 피자는 직접 화덕에 구워서 쫄깃하고 맛있다!
        </Text>
        <SLink
          href={
            "https://www.facebook.com/Street-Pizza-The-Wine-House-173072176066467/"
          }
        >
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>페이스북 그룹 Chiang Mai Eats</b>
        <Text>
          그 외에도 정말 많은 맛집이 있다. 페이스북 그룹에 가입하여, 치앙마이
          거주하는 노마드들이 추천해주는 맛집을 방문해보자.
        </Text>
        <SLink href={"https://www.facebook.com/groups/624398594280154/"}>
          Website
        </SLink>
      </Text>
    </Box>
  </Fragment>
);
