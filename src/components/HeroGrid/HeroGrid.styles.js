// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';

// styles
import breakpoints from '../../styles/breakpoints';

export const GridWrapper = css`
  position: relative;
`;

export const GridVector = styled.img`
  position: absolute;
  top: 0;
  left: 50%;

  width: 100%;

  transform: translateX(-50%);

  ${lessThan(breakpoints[3])} {
    width: 150%;
  }

  ${lessThan(breakpoints[1])} {
    width: 200%;
  }
`;

export const GridContent = styled.div`
  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [60, 120], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [60, 120], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
