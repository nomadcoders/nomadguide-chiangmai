import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/community/01.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">노마드 커뮤니티</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        디지털 노마드 치앙마이 커뮤니티는 대부분 페이스북 그룹, 밋업 중심으로
        형성되어있다. 특이한 건 노마드 여성들의 그룹도 있다는 것! 참고로, 필자는
        노마드 커뮤니티는 단 한 번 참여해보았고 재미가 없어서 계속 참여하지는
        않았다. 치앙마이 노마드들은 ‘노마드 커뮤니티' 모임 보다는 각자의 관심사
        (블록체인, 요가, 퍼머컬쳐 등)에 따라 커뮤니티가 더욱 강하게 형성되는 듯
        하다.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Chiang Mai Digital Nomads:</b>
        <Text inline={false}>
          <br />
          가장 유명한 치앙마이 디지털 노마드 페이스북 그룹. 사실 밋업보다는
          그룹에 올라오는 정보들이 유용하다.
        </Text>
        <br />
        <SLink href="https://www.facebook.com/groups/cmnomads">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Weekly Nomad Girls Lunch:</b>
        <Text inline={false}>
          <br />
          특이하게도 여성 노마드들을 대상으로 하는 모임이다. 매주 수요일 점심을
          같이 먹으며 이야기를 나눈다.
        </Text>
        <br />
        <SLink href="https://www.facebook.com/events/136801330348470/">
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>필자의 경험담:</b>
        <Text inline={false}>
          <br />
          디지털 노마드를 만나고 싶은가? 그렇다면 노마드 밋업만 안 가면 된다.
          사실 노마드 밋업에 나오는 사람들은 노마드가 되고 싶은 사람들이나,
          관광객인 경우가 대다수이다. 실제 노마드로 살고있는 사람들이 해당
          밋업에 가야 할 이유가 전혀 없기 때문이다. 그래서 밋업에 나가면 이제
          노마딩을 시도해보고자 하는 친구들을 잔뜩 만나게 된다. 노마드 밋업이나
          컨퍼런스보다 관심사 중심의 커뮤니티가 더욱 끈끈하고 재미있다.
        </Text>
      </Text>
    </Box>
  </Fragment>
);
