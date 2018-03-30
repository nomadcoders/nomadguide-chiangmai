import React from "react";
import styled from "styled-components";
import { Mask, Link } from "gestalt";
import LazyLoad from "react-lazyload";

export const Image = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
`;

export const MaskImage = ({ photo }) => (
  <Mask shape="rounded">
    <LazyLoad height={200} offset={100}>
      <Image background={photo} />
    </LazyLoad>
  </Mask>
);

export const Underline = styled.span`
  text-decoration: underline;
`;

export const SLink = ({ href, children }) => (
  <Underline>
    <Link href={href}>{children}</Link>
  </Underline>
);

export const VImage = styled.img`
  max-width: 100%;
`;
