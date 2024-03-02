import styled from 'styled-components';

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

export default Background;
