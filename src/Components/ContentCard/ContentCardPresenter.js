import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Column, Mask, Heading, Box, Button, Card, Text } from "gestalt";

const Img = styled.div`
  background-image: url(${props => props.background});
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 200px;
`;

const LinkHeader = styled.div`
  text-decoration: none;
`;

const ContentCard = ({ name, description, photo, link }) => (
  <Box marginBottom={5}>
    <Link to={link}>
      <Column span={12}>
        <Card>
          <Mask shape="rounded">
            <Img background={photo} />
          </Mask>
          <Box paddingY={5}>
            <Heading size="xs" bold lang="kr">
              <LinkHeader>{name}</LinkHeader>
            </Heading>
            <Text>{description}</Text>
          </Box>
        </Card>
      </Column>
    </Link>
  </Box>
);

ContentCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string,
  link: PropTypes.string
};

export default ContentCard;
