import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Column, Heading, Box, Card, Text } from "gestalt";
import { MaskImage } from "Components/Shared";

const LinkHeader = styled.div`
  text-decoration: none;
`;

const ContentCard = ({ name, description, photo, link }) => (
  <Box marginBottom={5}>
    <Link to={link}>
      <Column span={12}>
        <Card>
          <MaskImage shape="rounded" photo={photo} />
          <Box paddingY={5}>
            <Heading size="xs" bold lang="kr">
              <LinkHeader>{name}</LinkHeader>
            </Heading>
            <Box marginTop={2}>
              <Text>{description}</Text>
            </Box>
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
