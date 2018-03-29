import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/work/02.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">카페</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        코워킹 스페이스는 아니지만 거의 준하는 시설을 갖춘 ‘일하기 좋은 카페' 가
        엄청나게 많다. (정말 어마무시하게 많음) 안정적인 속도의 인터넷, 오래
        앉아 있어도 편한 의자와 테이블 높이, 적절한 퀄리티의 커피를 갖춘 일하기
        좋은 카페를 소개한다.
      </Text>
    </Box>
    <MaskImage photo={require("../assets/articles/cafe.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Cafe de Innova:</b>
        <Text inline={false}>
          <br />
          Innovative Village라는 스타트업 빌리지에 위치한 카페. 조용하고, 일하기
          좋은 테이블, 의자, 인터넷 속도, 맛있는 커피를 갖춘 최고의 일하기 좋은
          카페
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/e21QpwXkLnD2">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>PI-CHA-NON CAFE:</b>
        <Text inline={false}>
          <br />
          갤러리 카페, 조용하고 아름답다. 인터넷 속도가 빠르고 커피도 맛있다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/Ls8FUJ2U51E2">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Shewitkhontammada Coffee House:</b>
        <Text inline={false}>
          <br />
          님만에서 일을 하게 된다면 방문하는 카페. 비싸지만 그만큼 넓고
          쾌적하다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/JeGJr8u8Mu12">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Artisan Cafe:</b>
        <Text inline={false}>
          <br />
          올드시티 근방에서 일하기 좋은 카페. 디자인이 아름답고. 커피가 정말
          맛있다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/qQTH8YZ6gU72">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>My Secret Cafe In Town:</b>
        <Text inline={false}>
          <br />
          올드시티에서 일하기 좋은 카페, 약간 시끄럽지만 저녁 늦게까지 일할 수
          있다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/qQTH8YZ6gU72">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Wawee Coffee:</b>
        <Text inline={false}>
          <br />
          치앙마이의 스타벅스, 치앙마이에만 여러 곳의 분점을 갖고있다. 쾌적하고
          일하기 편하다.
        </Text>
        <br />
        <SLink href="http://www.waweecoffee.com/waweebranches-2">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Somkiat Cafe:</b>
        <Text inline={false}>
          <br />
          반깡왓, 왓우몽 근처의 자연에 둘러싸인 카페. 커피도, 밥도 맛있다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/tjigbx56sDu">Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Daddy's Antique cafe and restaurant:</b>
        <Text inline={false}>
          <br />
          항동 근처 매우 아름다운 카페 겸 레스토랑. 가격이 비싸지만 그만큼
          맛있고 고급지다.
        </Text>
        <br />
        <SLink href="https://goo.gl/maps/NbsWpUcUfbJ">Map</SLink>
      </Text>
    </Box>
  </Fragment>
);
