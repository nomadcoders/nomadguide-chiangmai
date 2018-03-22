import React, { Fragment } from "react";
import { MaskImage, SLink, Underline } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/transportation/03.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">스쿠터 렌탈</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이에서 ‘서민의 발'은 바로 ‘스쿠터' 이다. “태국인들은 스쿠터 타고
        화장실 간다"는 말이 있을 정도로, 아주 보편적인 교통수단이다. 외국인들도
        스쿠터를 일주일, 한 달 단위로 빌려서 타고 다닌다. 빌려주는 곳도 매우
        많은데, 꼼꼼히 점검해보고 빌리도록 하자.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>요금:</b>
        <li> 하루 (2~300밧)</li>
        <li> 일주일 (1,000~1,500밧)</li>
        <li> 한 달 (2,500~3,500밧)</li>
        <li> 기름은 리터당 50밧, 보통 100밧이면 full로 채울 수 있다.</li>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>계약 시 필요사항:</b>
        <li>여권, 보증금 (약 2~3,000밧)</li>
        <li>
          여권을 맡기거나 대신 보증금을 낼 수 있다 한 달 단위로 빌린다면
          보증금을 내고 여권을 가져오도록 하자.
        </li>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>계약 시 체크할것</b>
        <li>엔진 시동이 부드럽게 잘 걸리는지 체크.</li>
        <li>브레이크가 잘 작동하는지 체크.</li>
        <li>헬멧은 바람을 막아주는 윈드쉴드가 있는 것으로 요청</li>
        <li>스쿠터가 긁힌 부분이 있다면 구석구석 사진 찍어놓자</li>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>추천하는 스쿠터 기종:</b>
        <li>초보 및 여성의 경우, 가벼운 혼다 Scoopy 혹은 야마하 Vino 추천.</li>
        <li>중급 이상의 경우, 혼다 Click, Wave 110cc, 125cc 추천.</li>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="https://www.facebook.com/Buddy-Motorbike-694771817346619/">
          Buddy Motorbike
        </SLink>
      </Text>
      <Box marginTop={5} marginBottom={5}>
        <Text>
          <SLink href="https://www.facebook.com/vmotorbikes/">
            Vanessa motorbike hire
          </SLink>
        </Text>
      </Box>
    </Box>
  </Fragment>
);
