// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../../utils/breakpointsRange';
import { lessThan } from '../../../../utils/mediaQuery';

// styles
import breakpoints from '../../../../styles/breakpoints';
import colors from '../../../../styles/colors';
import { introStyle, magnifyStyle } from '../../../../styles/global';

export const CTAWrap = styled.div`
  display: flex;
  flex-flow: row;

  width: 100%;
  height: max-content;

  margin-top: 110px;

  background-color: ${colors.peach};
  border: 2px solid ${colors.blueberry10};
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

  ${lessThan(breakpoints[5])} {
    margin-top: 0;
  }
`;

export const Title = styled.h3`
  ${magnifyStyle}

  padding-bottom: 16px;
`;

export const Text = styled.p`
  ${introStyle}

  margin-right: 16px;

  padding-bottom: 32px;

  color: ${colors.blueberry10};
`;

export const ContentWrap = styled.div`
  margin-right: 1rem;
`;

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
    [
      { prop: 'bottom', sizes: [-24, -48], bases: [16, 20] },
      { prop: 'left', sizes: [-24, -48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )}
`;
