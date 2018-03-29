import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/tips/01.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">기본 태국어</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        기본 태국어는 몇 마디 배워가자. 하다못해 안녕하세요, 얼마에요,
        감사합니다, 이 3가지만 말할 수 있어도 당신을 바라보는 태국 사람들의
        눈빛이 바뀔 것이다. 이는 태국뿐만 아니라 어느 국가를 방문해도
        마찬가지이다. 한국에서 어설프게라도 ‘캄사함니다' 라고 말하는 외국인을
        봤을 때 당신의 태도를 생각해보자. 그뿐만 아니라, 기본 태국어를 알면 가격
        흥정을 할때 특히 더욱 유리하다는 사실!
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <Text>~캅 (말하는 사람이 남성일때), ~카 (여성일때)</Text>
        <br />
        <li>
          <b>안녕하세요:</b> 사와디 캅/카 내외)
        </li>
        <li>
          <b>감사합니다:</b> 컵쿤 캅/카
        </li>
        <li>
          <b>얼마에요:</b> 타올라이 캅/카
        </li>
        <li>
          <b>죄송합니다:</b> 커톳 캅/카 있다.
        </li>
        <br />
        <Text>1개월 월세</Text>
      </Text>
    </Box>
  </Fragment>
);
