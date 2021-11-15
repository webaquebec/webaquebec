// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import {
  GalleryContainer,
  GalleryTitle,
  GalleryText,
} from './GallerySection.styles';

const GallerySection = ({ title, children }) => {
  return (
    <GalleryContainer>
      <Center maxWidth='840px' gutters='var(--container-gutter)' intrinsic>
        <GalleryTitle>{title}</GalleryTitle>
        <GalleryText>{children}</GalleryText>
      </Center>
    </GalleryContainer>
  );
};

GallerySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GallerySection;
