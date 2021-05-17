// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';

// styles
import breakpoints from '../../styles/breakpoints';

export const GridWrapper = styled.div`
  position: relative;
`;

export const GridVector = styled.img`
  width: 100%;

  ${lessThan(breakpoints[3])} {
    width: 150%;
  }

  ${lessThan(breakpoints[1])} {
    width: 200%;
  }
`;

export const GridContent = styled.div`
  position: absolute;
  top: 0;

  width: 100%;

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [60, 120], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [60, 120], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
