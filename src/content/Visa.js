import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const Visa = () => (
  <Fragment>
    <MaskImage photo={require("../assets/preparation/01.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">비자</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        한국인의 경우 태국은 무비자 90일 체류할 수 있다. 단, 한국 공항에서
        체크인 할 시에 한국으로 다시 돌아오는 왕복 항공권 (returning ticket)을
        요구하거나, 태국에서 다른 국가로 향하는 onward ticket을 요구할 수
        있으므로, 잊지 말고 준비할 것! 해당 티켓이 없을 경우, 최악의 경우 해당
        항공사가 체크인을 거부하여 비행기를 못 타는 불상사가 일어날 수도 있다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        입국심사는 매우 심플한 편이고, 한국인들에게 관대하다. 그래도 항상 웃는
        얼굴 유지하고, 왜 태국에 왔냐고 물어보면, “아이 러브 타일랜드"를
        외쳐주시기 바란다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>- 무비자 90일</Text>
      <Box marginTop={2}>
        <Text>
          - 왕복항공권 (returning ticket) 혹은 다른 국가로 향하는 onward
          ticket을 준비할 것
        </Text>
      </Box>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        장기체류를 원한다면 1년 체류할 수 있는 Ed Visa를 고려해보자. Ed Visa는
        학생비자로서 발급 시 90일 동안 태국에 머무를 수 있고, 이후 60일마다
        연장하면 된다. 학생 비자를 신청하려면 해당 서비스를 제공하는 태국어 학원
        등에 문의하여 문의하는 것이 가장 빠르다. 보통 1년 Ed Visa는 학원 수강비
        (최소 300시간) 약 3만 밧이 필요하며, 이후 연장신고 할 때마다 이민국에
        1,900밧을 지급해야 한다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        Ed Visa 외에도 유사한 조건의 Self-Defense Visa도 선택할 수 있다.
        Self-Defense Visa의 경우 태국어 대신에 무에타이, 호신술을 배우는
        학생비자이다. Ed Visa보다 약간 더 비싸지만, 태국어를 배우지 않아도
        된다는 이점 때문에 많은 외국인이 선호하고 있다. 이뿐 아니라 최근 디지털
        노마드들이 급증함에 따라 일명 디지털 노마드 비자라고 하는 ‘Smart Visa’가
        생겼다. (2018년 2월 예정) 해당 비자의 경우 IT 개발자, 공학, 의료 전문가
        (한 달 수입 20만 밧 이상) 등의 전문직 종사자에 한하여 4년 체류를
        허용한다.
      </Text>
    </Box>
  </Fragment>
);

export default Visa;
