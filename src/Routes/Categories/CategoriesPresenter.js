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
      <ContentCard
        key={999}
        name={"ABOUT ❤️"}
        description={"누가, 어떻게, 왜 이걸 만들었나."}
        photo={require("../../assets/articles/us.jpg")}
        link={`/categories/About`}
      />
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
