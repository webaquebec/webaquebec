import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// styles
import { Blockquote } from './BlockPullquote.styles';

const BlockPullquote = (props) => {
  const {
    order,
    attributes: { value },
  } = props;

  return (
    <figure key={order}>
      <Blockquote dangerouslySetInnerHTML={{ __html: value }} />
    </figure>
  );
};

BlockPullquote.propTypes = {
  order: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlockPullquote;

export const query = graphql`
  fragment WpCorePullquoteBlock on WpCorePullquoteBlock {
    order
    name
    attributes {
      ... on WpCorePullquoteBlockAttributes {
        value
      }
    }
  }
`;
