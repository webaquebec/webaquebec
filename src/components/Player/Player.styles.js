// vendors
import styled, { css } from 'styled-components';
// import { rem } from 'polished';
// import colors from '../../styles/colors';
import { caption2Style } from '../../styles/global';

export const Container = styled.figure`
  break-inside: avoid;

  /* Pour Firefox : */
  page-break-inside: avoid;

  /* Pour WebKit : */

  /* -webkit-column-break-inside: avoid; */
`;

export const VideoContainer = styled.div`
  position: relative;

  z-index: 2;

  /* padding-top: ${100 / (16 / 9)}%; */
  aspect-ratio: 16 / 9;
`;

export const Caption = styled.figcaption`
  ${caption2Style}
`;

export const reactPlayerStyles = css`
  position: absolute;
  top: 0;
  left: 0;

  > div {
    overflow: initial !important;
  }
`;
