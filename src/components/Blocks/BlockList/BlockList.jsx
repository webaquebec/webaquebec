// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// styles
import { OrderedList, UnorderedList } from './BlockList.styles';
import { contentStyle } from '../Blocks.styles';

const BlockList = (props) => {
  const {
    order,
    attributes: { values, ordered },
  } = props;

  if (ordered) {
    return (
      <OrderedList
        key={order}
        css={contentStyle}
        dangerouslySetInnerHTML={{ __html: values }}
      />
    );
  }

  return (
    <UnorderedList
      key={order}
      css={contentStyle}
      dangerouslySetInnerHTML={{ __html: values }}
    />
  );
};

BlockList.propTypes = {
  order: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    values: PropTypes.string.isRequired,
    ordered: PropTypes.bool,
  }).isRequired,
};

export default BlockList;

export const query = graphql`
  fragment WpCoreListBlock on WpCoreListBlock {
    name
    order
    attributes {
      ... on WpCoreListBlockAttributes {
        ordered
        values
      }
    }
  }
`;
