import React, { Fragment } from "react";
import { MaskImage, SLink, Underline, VImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

export default () => (
  <Fragment>
    <Box marginTop={5} marginBottom={5}>
      <Heading size="xs">지도</Heading>
    </Box>
    <VImage src={require("../assets/articles/map.jpg")} />
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>올드시티</b>
        <Text>
          붉은 벽돌의 성벽과 이를 둘러싼 해자 안에 위치한 구 시가지를 일명
          ‘올드시티'라고 부른다. 올드시티는 유명한 관광지, 사원, 레스토랑, 카페
          및 코워킹 스페이스가 몰려있는 지역이다. 그래서 꽤나 복잡하기도 하지만
          또한 덕분에 도보로 구경 다닐 수 있다는 장점이 있다.
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>님만</b>
        <Text>
          일명 치앙마이의 ‘강남'이다. Maya mall과 같은 유명한 백화점, 쇼핑몰, 바
          및 레스토랑 등이 위치하여 있다. 레지던스, 코워킹 스페이스 역시 이곳에
          많이 위치하여있기에 단기거주하는 노마드들이 이곳을 선택한다.
          마찬가지로 유명 관광지이기에 주말에는 혼잡하며, 다른 지역에 비교하여
          물가가 비싼 편이다.
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>창클란</b>
        <Text>
          올드시티의 타페게이트, 나이트바자, 차이나타운, 핑강과 가깝기에 호텔
          중심으로, 카페, 마사지 숍들이 다수 위치하여 있다. 올드시티와 비슷하게
          주로 관광객이 거주한다.
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>산티탐</b>
        <Text>
          올드시티 및 님만과 가깝지만, 관광객이 없기에 혼잡하지 않아서 최근 꽤나
          많은 노마드들이 선호하는 지역이다. 현지 로컬 마켓, 저렴한 현지 맛집,
          카페들이 위치하여 있다.
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>창푸억</b>
        <Text>
          산티탐과 마찬가지의 이유로 떠오르는 노마드들의 핫스팟이다. 디지털
          노마드들을 위한 다양한 가격대의 레지던스, 콘도, 세련된 카페들이
          위치하여 있다.
        </Text>
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        <b>항동</b>
        <Text>
          올드시티, 님만 등 시내에서 멀어서 관광객들이 없는, 장기 체류 노마드 및
          태국 현지인들의 주거지역이다. 호텔, 레지던스 보다는 기본 6개월 ~ 1년
          단위 주택 렌트 (무반 Moo Baan)로 거주한다. 저렴한 현지 맛집, 카페,
          코워킹 스페이스 등이 위치하여 있다. 단, 스쿠터 혹은 우버 사용이
          필수라는 단점이 있다.
        </Text>
      </Text>
    </Box>
  </Fragment>
);
