import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "Components/Header";
import { Container } from "gestalt";
import Categories from "../../content/categories";
import ContentCard from "Components/ContentCard";

const CategoryPresenter = ({ title }) => (
  <Container>
    <Header hasBackButton={true} title={title} />
    {Categories.map(category => category.articles).map((article, index) => (
      <ContentCard
        key={index}
        name={article.name}
        description={article.description}
        photo={article.photo}
        link={`/article/${article.name}`}
      />
    ))}
  </Container>
);

CategoryPresenter.propTypes = {
  title: PropTypes.string.isRequired
};

export default CategoryPresenter;
