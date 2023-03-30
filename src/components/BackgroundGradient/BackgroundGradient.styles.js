import styled from 'styled-components';

import GrainyNoise from '../../images/textures/grainy-noise.png';
import zIndexes from '../../styles/zIndexes';
// import colors from '../../styles/colors';

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndexes.background};

  width: 100vw;
  height: 100vh;
`;

export const Gradient = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndexes.background};

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  opacity: 0.5;
`;

export const Noise = styled.div`
  position: fixed;
  top: -100%;
  left: -100%;
  z-index: ${zIndexes.background + 1};

  width: 500vw;
  height: 500vh;

  overflow: hidden;

  background-image: url(${GrainyNoise});
  background-repeat: repeat;

  opacity: 0.5;

  user-select: none;
  pointer-events: none;
`;
