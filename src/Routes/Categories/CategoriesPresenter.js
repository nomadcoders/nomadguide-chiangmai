import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "gestalt";
import Header from "Components/Header";

const CategoriesPresenter = ({ categories }) => (
  <Container>
    <Header title={"Categories"} />
  </Container>
);

CategoriesPresenter.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesPresenter;
