// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';
import { fontFamilies } from '../../styles/typography';
import colors from '../../styles/colors';

export const GridTitle = styled.h2`
  color: ${colors.bleu80};
  font-family: ${fontFamilies.redaction};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 48], bases: [16, 20] },
      { prop: 'marginTop', sizes: [80, 160], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 64], bases: [16, 20] },
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
