// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';
import { magnifyStyle, pixelatedStyle } from '../../styles/global';

export const Title = styled.h2`
  text-align: center;

  ${magnifyStyle}

  ${pixelatedStyle}

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [80, 160], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 64], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PresentingWrapper = styled.div`
  align-items: center;

  text-align: left;
`;

export const PresentingText = styled.p`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [22, 24], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 56], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const premiumGrid = css`
  ${breakpointsRange(
    [{ prop: 'margin', sizes: [-12, -24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const premiumGridItem = css`
  ${breakpointsRange(
    [{ prop: 'margin', sizes: [12, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;

  ${breakpointsRange(
    [{ prop: 'margin', sizes: [-8, -12], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const GridItem = styled.li`
  ${breakpointsRange(
    [{ prop: 'margin', sizes: [8, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
