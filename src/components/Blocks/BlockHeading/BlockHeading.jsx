// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { css } from 'styled-components';

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

  switch (level) {
    case 1:
      return (
        <h1
          key={order}
          css={`
            ${h1Style}
            ${contentStyle}
          `}
        >
          {content}
        </h1>
      );
    case 2:
      return (
        <h2
          key={order}
          css={`
            ${h2Style}
            ${contentStyle}
          `}
        >
          {content}
        </h2>
      );
    case 3:
      return (
        <h3
          key={order}
          css={`
            ${h3Style}
            ${contentStyle}
          `}
        >
          {content}
        </h3>
      );
    case 4:
      return (
        <h4
          key={order}
          css={`
            ${h4Style}
            ${contentStyle}
          `}
        >
          {content}
        </h4>
      );
    case 5:
      return (
        <h5
          key={order}
          css={`
            ${h5Style}
            ${contentStyle}
          `}
        >
          {content}
        </h5>
      );
    case 6:
      return (
        <h6
          key={order}
          css={`
            ${h6Style}
            ${contentStyle}
          `}
        >
          {content}
        </h6>
      );
    default:
      return <p key={order}>{content}</p>;
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
