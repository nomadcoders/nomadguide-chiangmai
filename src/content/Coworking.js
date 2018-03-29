import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/work/01.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">코워킹 스페이스</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이가 디지털 노마드의 수도로 부상함에 따라, 매년 디지털 노마드의
        인구가 증가하고 코워킹 스페이스 및 카페도 비례하여 늘어나고 있다. 참고로
        필자는 개인적으로 코워킹 스페이스 보다는 카페에서 일하는 것을 선호한다.
      </Text>
    </Box>
    <MaskImage photo={require("../assets/articles/punspace.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>TCDC Chiang Mai:</b>

        <Text inline={false}>
          <br />
          TCDC는 디자인과 창작에 특화된 도서관이다. 멤버십을 생성하려면 여권을
          지참해야한다. 1년 멤버십이 600밧으로 매우 저렴하며 건물도 아름답다.
        </Text>
        <br />
        <SLink href="http://www.tcdc.or.th/chiangmai/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>CAMP:</b>

        <Text inline={false}>
          <br />
          무료 이용이 가능하며 24시간 개방되어있다. 그래서 항상 학생들로 붐빈다.
          음료를 사면 2시간 사용가능한 와이파이 사용권을 준다.
        </Text>
        <br />
        <SLink href="http://www.ais.co.th/campais/en/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Punspace:</b>

        <Text inline={false}>
          <br />
          타페게이트, 올드시티, 님만 등지에 총 3군데 코워킹 스페이스를 운영하고
          있다. 하루, 일주일, 월, 3개월, 6개월 등 기간별로 멤버십을 신청하여
          사용할 수 있다. 가장 유명한 코워킹 스페이스이나, 가격이 비싸고, 공간이
          다소 복잡하다.
        </Text>
        <br />
        <SLink href="http://www.punspace.com/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Addicted to Work:</b>

        <Text inline={false}>
          <br />
          님만에 위치한 새로 생긴 코워킹 스페이스이다. 시간별로 이용이 가능하다.
        </Text>
        <br />
        <SLink href="http://www.addictedtowork.co/">Website</SLink>
      </Text>
    </Box>
  </Fragment>
);
