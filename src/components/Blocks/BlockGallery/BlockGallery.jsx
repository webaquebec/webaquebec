// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// styles
import Container from './BlockGallery.styles';

const BlockGallery = (props) => {
  const { order, saveContent } = props;

  return (
    <Container key={order} dangerouslySetInnerHTML={{ __html: saveContent }} />
  );
};

BlockGallery.propTypes = {
  order: PropTypes.number.isRequired,
  saveContent: PropTypes.string.isRequired,
};

export default BlockGallery;

export const query = graphql`
  fragment WpCoreGalleryBlock on WpCoreGalleryBlock {
    order
    name
    saveContent
  }
`;
