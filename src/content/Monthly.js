import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/tips/05.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">월별 치앙마이 즐기기</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <li>
          <b>1월:</b> 새해맞이 타페게이트에서 등불 날리기
        </li>
        <li>
          <b>2월:</b> 꽃 축제
        </li>
        <li>
          <b>4월:</b> 쏭크란 (Songkran) 물 축제
        </li>
        <li>
          <b>5월:</b> 두리안 (Durian 열대과일) 축제
        </li>
        <li>
          <b>6월:</b> 인타낀 (Inthakin) 불교 페스티벌
        </li>
        <li>
          <b>10월:</b> 채식주의자 페스티벌
        </li>
        <li>
          <b>11월:</b> 러이끄라통 (Loi Krathong) 등불 축제
        </li>
        <li>
          <b>12월:</b> 님만해민 아트 페스티벌 (NAP)
        </li>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이를 방문하기에 최적의 시즌은 11월 ~ 2월이다. 반대로 치앙마이에
        오지 말라고 당부하고 싶은 기간은 버닝 시즌 (농작물을 태우는 연기가
        극심한 기간)인 3월 그리고 가장 강수량이 많은 8~9월이다.
      </Text>
    </Box>
  </Fragment>
);
