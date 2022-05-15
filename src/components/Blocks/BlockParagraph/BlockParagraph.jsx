// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// utils
import stripHtmlTags from '../../../utils/strings/stripHtmlTags';

// styles
import { contentStyle } from '../Blocks.styles';

const BlockParagraph = (props) => {
  const { order, saveContent } = props;

  return (
    <p
      key={order}
      css={contentStyle}
      dangerouslySetInnerHTML={{
        __html: stripHtmlTags(saveContent, { unwantedTags: ['p'] }),
      }}
    />
  );
};

BlockParagraph.propTypes = {
  order: PropTypes.number.isRequired,
  saveContent: PropTypes.string.isRequired,
};

export default BlockParagraph;

export const query = graphql`
  fragment WpCoreParagraphBlock on WpCoreParagraphBlock {
    order
    name
    saveContent
  }
`;
