// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const blockContainerStyle = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [56, 80] },
      { prop: 'paddingRight', sizes: [32, 80] },
      { prop: 'paddingBottom', sizes: [56, 80] },
      { prop: 'paddingLeft', sizes: [32, 80] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const ContentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const BlocksWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [0, 120] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const TicketTitle = styled.h2`
  margin: 0;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [18, 24], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const TicketPrice = styled.span`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [50, 60], bases: [16, 20] },
      { prop: 'marginTop', sizes: [32, 40], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TicketText = styled.p`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [14, 16], unit: '' },
      { prop: 'marginTop', sizes: [32, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
