import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";

const TukTuk = () => (
  <Fragment>
    <MaskImage photo={require("../assets/transportation/02.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">쏭태우 / 툭툭</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        쏭태우(Songthaew)는 치앙마이에 있는 일종의 버스이다. 사실 색상이
        빨간색만 있는 것이 아니라, 노란색, 하얀색, 파란색 등 총 6가지 색상의
        트럭이 있다. 가장 유명한 트럭이 치앙마이 올드시티를 오가는 빨간
        트럭인지라 ‘Red Truck’이라고 불리게 된 것이다. 쏭태우는 나름의 구간이
        있어서 태국 현지인들은 버스처럼 올라타고, 내리고는 하는데, 그 구간이라는
        것이 눈에 뜨이는 정류장이나 지도가 있는 것이 아니기에 외국인들은 탈
        때마다 어디까지 가는지 이야기하고 요금을 흥정한 후 올라탄다. 한번 탈
        때마다 요금은 약 30밧에서 시작한다. 흥정을 못 하면 바가지 쓰게 되니
        조심하자.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        툭툭 (Tuktuk)은 주로 치앙마이 시내에서 탈 수 있는 교통수단이다. 쏭태우와
        마찬가지로 올라탈 때 툭툭 아저씨에게 어디까지 가는지 말하고 요금을
        흥정해야 한다. 툭툭의 경우 현지인보다는 관광객들을 위한 교통수단인지라
        가격이 저렴한 편은 아니다.
      </Text>
    </Box>
  </Fragment>
);

export default TukTuk;
