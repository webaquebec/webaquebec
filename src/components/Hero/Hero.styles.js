// vendors
import styled from 'styled-components';

// styles
import colors from '../../styles/colors';
import { fontFamilies, fontWeights } from '../../styles/typography';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const GridTitle = styled.h1`
  margin: 0;

  color: ${colors.bleu80};

  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [32, 96], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [38, 116], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GridTitleWrapper = styled.div`
  position: relative;

  display: inline-block;

  background-color: ${colors.gris30};
  border: 3px solid ${colors.bleu80};
  transform: rotate3d(0, 0, 1, 3.82deg);

  ${breakpointsRange(
    [
      { prop: 'borderRadius', sizes: [12, 16], bases: [16, 20] },
      { prop: 'paddingTop', sizes: [12, 24], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [12, 24], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 40], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const YearSticker = styled.img`
  position: absolute;

  transform: translateY(100%) rotate3d(0, 0, 1, -5.09deg);

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [100, 200], bases: [16, 20] },
      { prop: 'bottom', sizes: [16, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
