import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "gestalt";
import Header from "Components/Header";
import Articles from "Components/Articles";

const ArticlePresenter = ({ title }) => (
  <Container>
    <Header title={title} hasBackButton={true} />
    <Box justifyContent="center" paddingX={4}>
      <Articles title={title} />
    </Box>
  </Container>
);

ArticlePresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default ArticlePresenter;
