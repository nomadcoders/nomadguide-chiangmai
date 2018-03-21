import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Container } from "gestalt";
import Header from "Components/Header";

const ArticlePresenter = ({ title }) => (
  <Container>
    <Header title={title} hasBackButton={true} />
    <Box justifyContent="center" paddingX={4} />
  </Container>
);

ArticlePresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default ArticlePresenter;
