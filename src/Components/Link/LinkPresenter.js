import React from "react";
import PropTypes from "prop-types";
import { Toast, Link } from "gestalt";
import styled from "styled-components";

const LinkPresenter = ({ title, description, url, thumbnail }) => (
  <Link href={url}>
    <Toast
      text={[title, description]}
      thumbnail={<LinkImage image={thumbnail} />}
    />
  </Link>
);

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  width: 50px;
  height: 50px;
`;

const LinkImage = ({ image }) => <Image image={image} />;

LinkPresenter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

LinkImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default LinkPresenter;
