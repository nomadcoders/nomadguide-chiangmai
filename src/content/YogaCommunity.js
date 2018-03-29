import React, { Fragment } from "react";
import { MaskImage, SLink } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <MaskImage photo={require("../assets/community/03.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">요가 커뮤니티</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        노마드, 프로그래밍 보다 더 활성화된 커뮤니티는 요가, 명상, 타이 마사지
        커뮤니티이다. 사실 치앙마이에 가장 처음 생긴 커뮤니티는 요가, 명상
        커뮤니티이기에 어찌 보면 더 역사가 오래되었고 커뮤니티도 더욱 돈독하다.
        필자는 치앙마이 도착하여 무에타이, 퍼머컬쳐, 요가를 배우며 비슷한
        관심사를 지닌 친구들을 만날 수 있었다.
      </Text>
    </Box>
    <MaskImage photo={require("../assets/articles/temple.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">요가:</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Yoga Tree:</b>
        <Text inline={false}>
          <br />
          요가 뿐만 아니라 댄스 만델라 (Dance Mandala)등 다양한 워크숍을
          운영하고 있다. 1회 수업마다 300밧, 10회 수강권은 2,500밧이다.
        </Text>
        <br />
        <SLink href="http://theyogatree.org/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Tantra Yoga:</b>
        <Text inline={false}>
          <br />
          요가, 요가 리트릿 중심으로 운영하고 있다. 1회 수업 220밧, 한달
          수강권은 700밧이다. 초보자는 morning/evening yoga 를 수강하면 된다.
        </Text>
        <br />
        <SLink href="http://www.tantrayogathailand.com/">Website</SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">명상:</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Wat Umong:</b>
        <Text inline={false}>
          <br />
          왓 우몽 사원에서 비파사나 명상을 배우며 머물 수 있다. 최소 일주일
          머물며 수련해야하며 하루 220밧을 내면 사원에서 잠자리 및 식사를
          제공해준다. 외국인 수련자들을 고려하여 영어로 명상 프로그램을
          진행한다.
        </Text>
        <br />
        <SLink href="http://www.watumong.org/web/187/wat-umong-meditation-center">
          Website
        </SLink>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">타이 마사지:</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>Thai Massage Shivagakomarpaj:</b>
        <Text inline={false}>
          <br />
          치앙마이에서 타이 마사지를 배울 수 있는 곳은 매우 많다. 너무 저렴한
          곳을 찾기보다는, 전문적으로 꾸준히 학생들을 배출하고 있고, 집에서
          가까운 곳에서 최소 1주일 정통 태국 마사지 코스를 통해 배우기를
          추천한다. 오일 마사지를 배우는 것보다, 전통 태국 마사지를 배우는 것이
          좋으며, 이왕 배운다면 최소 1주일은 배워야 기본기를 닦을 수 있다.
        </Text>
        <br />
        <SLink href="http://thaimassageschool.ac.th/">Website</SLink>
      </Text>
    </Box>
  </Fragment>
);
