import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/food/03.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">슈퍼마켓</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>빅씨(BigC), 매크로(Macro), 테스코 (Tesco):</b>
        <Text>저렴한 가격, 현지인 대상</Text>
        <SLink href={"https://goo.gl/maps/FZoeTfC26k52"}>
          BIG C Hang Dong Map
        </SLink>
        <SLink href={"https://goo.gl/maps/H3pqtDpFact"}>
          Tesco Hang Dong Map
        </SLink>
        <SLink href={"https://goo.gl/maps/frDX3ozAbY72"}>
          Macro Hang Dong Map
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>데카트론 (Decathlon):</b>
        <Text>각종 스포츠 용품, 합리적인 가격</Text>
        <SLink href={"https://goo.gl/maps/4RSFEaM4uKx"}>Decathlon Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>림핑 (Rimping):</b>
        <Text>수입품 위주, 외국인 대상</Text>
        <SLink href={"https://goo.gl/maps/1ZWRq39akcB2"}>Rimping Map</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        대형 슈퍼마켓들은 대부분 항동에 위치하여 있으며, 내부에 은행 및
        레스토랑도 입점해있기때문에 방문하면 일처리를 한 번에 할 수 있어 편하다.
        림핑의 경우 수입품 위주의 마트이므로 한국, 일본, 미국, 호주 등 다양한
        수입품을 구입할 수 있다.
      </Text>
    </Box>
  </Fragment>
);
