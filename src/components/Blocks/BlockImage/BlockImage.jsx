// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container } from './BlockImage.styles';

const BlockImage = (props) => {
  const { order, saveContent } = props;

  return (
    <Container key={order} dangerouslySetInnerHTML={{ __html: saveContent }} />
  );
};

BlockImage.propTypes = {
  order: PropTypes.number.isRequired,
  saveContent: PropTypes.string.isRequired,
};

export default BlockImage;

export const query = graphql`
  fragment WpCoreImageBlock on WpCoreImageBlock {
    order
    name
    saveContent
  }
`;
