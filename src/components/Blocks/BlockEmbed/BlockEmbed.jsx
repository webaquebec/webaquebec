// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

// import Frame from '../../LayoutSections/Frame/Frame';
import Player from '../../Player/Player';

const playerStyle = css`
  iframe {
    border-radius: 12px;
  }
`;

const BlockEmbed = (props) => {
  const {
    order,
    attributes: { caption, url, type },
  } = props;

  const node = {
    type,
    url,
    caption,
  };

  return <Player key={order} node={node} css={playerStyle} />;
};

BlockEmbed.propTypes = {
  order: PropTypes.number.isRequired,
  attributes: PropTypes.shape({
    caption: PropTypes.string,
    url: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
};

export default BlockEmbed;

export const query = graphql`
  fragment WpCoreEmbedBlock on WpCoreEmbedBlock {
    order
    attributes {
      ... on WpCoreEmbedBlockAttributes {
        caption
        url
        type
      }
    }
  }
`;
