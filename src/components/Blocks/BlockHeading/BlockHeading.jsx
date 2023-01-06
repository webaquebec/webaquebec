// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import sanitizeHtml from 'sanitize-html';

// styles
import {
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  h5Style,
  h6Style,
} from '../../../styles/global';

import { contentStyle } from '../Blocks.styles';

// export const contentStyle = css`
//   box-sizing: content-box;
//   max-width: var(--max-content-post-width);
//   margin-right: auto;
//   margin-left: auto;
// `;

const BlockHeading = (props) => {
  const {
    order,
    attributes: { level, content },
  } = props;

  const cleanContent = sanitizeHtml(content);

  switch (level) {
    case 1:
      return (
        <h1
          key={order}
          css={`
            ${h1Style}
            ${contentStyle}
          `}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      );
    case 2:
      return (
        <h2
          key={order}
          css={`
            ${h2Style}
            ${contentStyle}
          `}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      );
    case 3:
      return (
        <h3
          key={order}
          css={`
            ${h3Style}
            ${contentStyle}
          `}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      );
    case 4:
      return (
        <h4
          key={order}
          css={`
            ${h4Style}
            ${contentStyle}
          `}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      );
    case 5:
      return (
        <h5
          key={order}
          css={`
            ${h5Style}
            ${contentStyle}
          `}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      );
    case 6:
      return (
        <h6
          key={order}
          css={`
            ${h6Style}
            ${contentStyle}
          `}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      );
    default:
      return (
        <p key={order} dangerouslySetInnerHTML={{ __html: cleanContent }} />
      );
  }
};

BlockHeading.propTypes = {
  order: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    level: PropTypes.number,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlockHeading;

export const query = graphql`
  fragment WpCoreHeadingBlock on WpCoreHeadingBlock {
    order
    name
    attributes {
      ... on WpCoreHeadingBlockAttributes {
        level
        content
      }
    }
  }
`;
