import React, { Fragment } from "react";
import { MaskImage, SLink, Underline } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const Uber = () => (
  <Fragment>
    <MaskImage photo={require("../assets/transportation/01.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">우버 / 그렙</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        우버(Uber) 및 그렙(Grab)은 대중교통 수단이 없는 치앙마이에서 필수
        앱이다. 도착해서 태국 전화번호로 인증, 설치하도록 하자. 미리 설치했다면,
        전화번호를 태국 현지번호로 변경하자. 왜냐면, 택시기사가 전화를 걸어서
        위치를 확인하는 경우가 종종 있기 때문이다. 요금은 우버가 그렙보다 약간
        더 비싸지만, 서비스가 안정적이어서 (2018년 기준) 치앙마이에서 가장 많이
        쓰이고 있다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        우버 사용방법은 매우 간단하다. 출발지, 도착지를 입력 후 우버 택시를
        부르면 된다. 우버 택시기사들이 길을 헤매는 경우가 잦아서, 출발지를
        입력할 때 은행이나 호텔 등 건물 중심으로 호출하도록 하자. 계산 시
        현금으로 할지 신용카드로 결제할지 선택할 수 있다. 할인쿠폰을 받고싶은가?
        우버의 경우, 회원가입시 인증한 이메일 및 휴대전화 메시지로 Promo code
        (할인쿠폰)을 보내준다. 할인쿠폰을 활용하면 약 4~50밧 정도 할인 받을 수
        있다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        - 우버 가입하기:{" "}
        <SLink href="http://www.uber.com/">http://www.uber.com/</SLink>
      </Text>
      <Box marginTop={2}>
        <Text>- 추천코드 입력하고 무료 탑승권 받기: 추천코드</Text>
      </Box>
      <Box>
        <Text>
          <Underline>lynnp571ue</Underline>
        </Text>
      </Box>
    </Box>
  </Fragment>
);

export default Uber;
