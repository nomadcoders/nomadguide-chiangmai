import React, { Fragment } from "react";
import { MaskImage } from "Components/Shared";
import { Heading, Box, Text } from "gestalt";
const Stuff = () => (
  <Fragment>
    <MaskImage photo={require("../assets/articles/category.jpg")} />
    <Box marginTop={5}>
      <Heading size="xs">Stuff!</Heading>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        Now that there is the Tec-9, a crappy spray gun from South Miami. This
        gun is advertised as the most popular gun in American crime. Do you
        believe that shit? It actually says that in the little book that comes
        with it: the most popular gun in American crime. Like they're actually
        proud of that shit. The path of the righteous man is beset on all sides
        by the iniquities of the selfish and the tyranny of evil men. Blessed is
        he who, in the name of charity and good will, shepherds the weak through
        the valley of darkness, for he is truly his brother's keeper and the
        finder of lost children. And I will strike down upon thee with great
        vengeance and furious anger those who would attempt to poison and
        destroy My brothers.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        The path of the righteous man is beset on all sides by the iniquities of
        the selfish and the tyranny of evil men. Blessed is he who, in the name
        of charity and good will, shepherds the weak through the valley of
        darkness, for he is truly his brother's keeper and the finder of lost
        children. And I will strike down upon thee with great vengeance and
        furious anger those who would attempt to poison and destroy My brothers.
        And you will know My name is the Lord when I lay My vengeance upon thee.
      </Text>
    </Box>
    <Box marginTop={5} marginBottom={5}>
      <Text>
        Your bones don't break, mine do. That's clear. Your cells react to
        bacteria and viruses differently than mine. You don't get sick, I do.
        That's also clear. But for some reason, you and I react the exact same
        way to water. We swallow it too fast, we choke. We get some in our
        lungs, we drown. However unreal it may seem, we are connected, you and
        I. We're on the same curve, just on opposite ends.
      </Text>
    </Box>
  </Fragment>
);

export default Stuff;
