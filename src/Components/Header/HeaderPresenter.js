import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Container, Heading, Text, Icon } from "gestalt";
import { withRouter } from "react-router-dom";

const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 999;
`;

const Link = styled.span`
  cursor: pointer;
`;

const HeaderPresenter = ({ title, hasBackButton = false, history }) => (
  <Fixed>
    <Container>
      <Box
        padding={1}
        color="white"
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
      >
        {hasBackButton && (
          <Link onClick={() => history.goBack()}>
            <Box marginRight={1} padding={1}>
              <Icon icon="arrow-back" accessibilityLabel={"Go back"} />
            </Box>
          </Link>
        )}
        <Box
          color="white"
          padding={3}
          dangerouslySetInlineStyle={{
            __style: { marginRight: "auto", marginLeft: "auto" }
          }}
        >
          <Text align="center" size="lg" bold>
            {title}
          </Text>
        </Box>
      </Box>
    </Container>
  </Fixed>
);

HeaderPresenter.propTypes = {
  title: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool.isRequired
};

export default withRouter(HeaderPresenter);
