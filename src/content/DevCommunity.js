import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/community/02.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">개발자 커뮤니티</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        프로그래밍, 비트코인 등 개발자 커뮤니티가 활발하다. 거의 매주 한 번씩은
        관련 모임이 있다. 특히 비트코인 모임의 경우에는 2014년부터 꾸준히 매주
        운영되었다. 필자는 개발자가 아닌지라 해당 커뮤니티 참석을 해본 적이
        없다. 그러나 옆에서 지켜본 바에 의하면 비트코인 밋업은 꾸준히
        고정멤버들에 의하여 잘 운영되고 있는 듯 하다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>비트코인 밋업</b>
        <SLink href="https://www.meetup.com/bitcoinsinchiangmai/">
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>워드프레스 밋업</b>
        <SLink href="https://www.meetup.com/Chiang-Mai-WordPress-Meetup">
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>웹 프로그래머 밋업:</b>
        <SLink href="https://www.meetup.com/Chiang-Mai-Web-Programmer/">
          Website
        </SLink>
      </Text>
    </Box>
  </Fragment>
);
