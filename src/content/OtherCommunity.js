import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/community/04.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">그 외</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        치앙마이에는 그 외에도 다양한 종류의 커뮤니티가 존재한다. 무에타이,
        퍼머컬쳐, 쿠킹, 바이크 라이딩 등등 치앙마이가 제공하는 다양한 액티비티,
        자연, 문화가 그만큼 다양하기에 이를 쫓아 여러 커뮤니티가 자유롭게
        형성되어있는 것. 새로운 것도 배우고, 친구도 사귀는 것을 강력 추천한다.
      </Text>
    </Box>
    <MaskImage photo={require("../assets/articles/farm.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>무에타이, Team Quest Chiang Mai:</b>
        <br />
        <SLink href="http://tqmmathailand.com/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>퍼머컬쳐, 유기농 오가닉, Panya Project:</b>
        <br />
        <SLink href="http://www.panyaproject.org/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>North Gate Jazz Bar, 치앙마이 최고의 재즈 바:</b>
        <br />
        <SLink href="https://www.facebook.com/northgate.jazzcoop/">
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Roots Rock Reggae Bar, 레게, 히피, 춤:</b>
        <br />
        <SLink href="https://www.facebook.com/RootsRockReggaeCM/">
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>철학, Socrates Cafe:</b>
        <br />
        <SLink href="https://www.meetup.com/Socrates-Cafe-Chiang-Mai/">
          Website
        </SLink>
      </Text>
    </Box>
  </Fragment>
);
