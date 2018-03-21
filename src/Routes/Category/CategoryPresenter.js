import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "Components/Header";
import { Container } from "gestalt";

const CategoryPresenter = ({ title }) => (
  <Container>
    <Header hasBackButton={true} title={title} />
  </Container>
);

CategoryPresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default CategoryPresenter;
