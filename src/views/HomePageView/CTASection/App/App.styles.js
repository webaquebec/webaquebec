// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../../utils/breakpointsRange';
import { lessThan } from '../../../../utils/mediaQuery';

// styles
import breakpoints from '../../../../styles/breakpoints';
import colors from '../../../../styles/colors';
import {
  introStyle,
  magnifyStyle,
  pixelatedStyle,
} from '../../../../styles/global';

export const CTAWrap = styled.div`
  display: flex;
  flex-flow: row;

  width: 100%;
  height: max-content;

  margin-top: 110px;

  border: 2px solid ${colors.bleu80};
  border-radius: 16px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [24, 48], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [24, 96], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [24, 96], bases: [16, 20] },
    ],
    breakpoints.spacings
  )}
`;

export const Title = styled.h3`
  ${magnifyStyle}
  ${pixelatedStyle}

  padding-bottom: 16px;
`;

export const Text = styled.p`
  ${introStyle}

  padding-bottom: 32px;

  color: ${colors.bleu80};
`;

export const ContentWrap = styled.div``;

export const ImageWrap = styled.div`
  position: relative;

  width: 85%;

  ${lessThan(breakpoints[5])} {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;

  height: 420px;

  ${breakpointsRange(
    [{ prop: 'bottom', sizes: [-24, -48], bases: [16, 20] }],
    breakpoints.spacings
  )}
`;
