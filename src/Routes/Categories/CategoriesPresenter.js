import React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "gestalt";
import Header from "Components/Header";
import ContentCard from "Components/ContentCard";

const CategoriesPresenter = ({ categories }) => (
  <Container>
    <Header title={"Categories"} hasBackButton={false} />
    <Box justifyContent="center" paddingX={4}>
      {categories.map((category, index) => (
        <ContentCard
          key={index}
          name={category.name}
          description={category.description}
          photo={category.photo}
          link={`/categories/${category.name}`}
        />
      ))}
    </Box>
  </Container>
);

CategoriesPresenter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CategoriesPresenter;
