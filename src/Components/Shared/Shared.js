import React from "react";
import styled from "styled-components";
import { Mask } from "gestalt";

export const Image = styled.div`
  background-image: url(${props => props.background});
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 200px;
`;

export const MaskImage = ({ photo }) => (
  <Mask shape="rounded">
    <Image background={photo} />
  </Mask>
);
