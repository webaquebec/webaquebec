/* eslint-disable no-underscore-dangle */
// vendors
import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import {
  Container,
  VideoContainer,
  Caption,
  reactPlayerStyles,
} from './Player.styles';

const Player = ({ node, ...rest }) => {
  if (node.type !== 'video') return null;

  return (
    <Container {...rest}>
      <VideoContainer>
        <ReactPlayer
          className='react-player'
          css={reactPlayerStyles}
          width='100%'
          height='100%'
          url={node.url}
        />
      </VideoContainer>

      {node.caption && <Caption>{node.caption}</Caption>}
    </Container>
  );
};

Player.propTypes = {
  node: PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    caption: PropTypes.string,
  }).isRequired,
};

export default Player;
