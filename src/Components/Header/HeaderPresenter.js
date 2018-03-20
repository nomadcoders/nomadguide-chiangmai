import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Container, Heading, Text } from "gestalt";

const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderPresenter = ({ title }) => (
  <Fixed>
    <Box padding={3}>
      <Container>
        <Box color="white" padding={3}>
          <Text align="center" size="lg" bold>
            {title}
          </Text>
        </Box>
      </Container>
    </Box>
  </Fixed>
);

HeaderPresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeaderPresenter;
