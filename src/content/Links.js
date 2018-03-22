import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/housing/04.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">유용한 링크</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        아래 웹사이트에서 손쉽게 콘도 및 아파트 매물 및 시세를 확인할 수 있다.
        원하는 지역과 조건의 콘도를 발견하면 해당 포스팅을 올린 사람에게
        페이스북 메시지를 보내고 미팅 날짜를 잡으면 된다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="https://perfecthomes.co.th">
          Chiang Mai Perfect Homes
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="https://www.facebook.com/groups/540465619490780/">
          Chiang Mai Condos for sale & rent
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="https://www.facebook.com/groups/273105062891702/">
          Houses & Land and condos for rent or sale in Chiang Mai
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="https://www.facebook.com/groups/cnxre/">
          Chiang Mai Real Estate
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <SLink href="https://www.facebook.com/groups/563087507200905/">
          Chiang Mai Second Hand Deals, Sell Buy Trade (이불, 침대 구입 가능)
        </SLink>
      </Text>
    </Box>
  </Fragment>
);
