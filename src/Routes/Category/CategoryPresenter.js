import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "Components/Header";
import { Container, Box } from "gestalt";
import Categories from "../../content/categories";
import ContentCard from "Components/ContentCard";

const CategoryPresenter = ({ title }) => (
  <Container>
    <Header hasBackButton={true} title={title} />
    <Box justifyContent="center" paddingX={4}>
      {Categories[title.toLowerCase()].articles.map((article, index) => (
        <ContentCard
          key={index}
          name={article.name}
          description={article.description}
          photo={article.photo}
          link={`/articles/${article.name}`}
        />
      ))}
    </Box>
  </Container>
);

CategoryPresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default CategoryPresenter;
