// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';
import colors from '../../../styles/colors';

export const blockContainerStyle = css`
  max-width: 525px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [56, 60] },
      { prop: 'paddingRight', sizes: [32, 38] },
      { prop: 'paddingBottom', sizes: [56, 70] },
      { prop: 'paddingLeft', sizes: [32, 38] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const buttonStyle = css`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ContentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const BlocksWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 120] }],
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

export const TicketBadge = styled.p`
  padding: 6px 8px;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [20, 20], bases: [16, 20] },
      { prop: 'fontSize', sizes: [22, 22], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [18, 24], unit: '' },
    ],
    breakpoints.spacings
  )};

  color: ${colors.white};
  text-transform: uppercase;

  background: ${`linear-gradient(45deg, ${colors.apricot}, hsl(
    ${colors.blushHsl.hue},
    80%,
    65%
  ) 30%, hsl(
    ${colors.blushHsl.hue},
    80%,
    68%
  ) 75%, ${colors.apricot})`};

  border-radius: 4px;
  transform: rotate(-10deg);
`;

export const TicketPrice = styled.div`
  display: grid;
  grid-gap: 5px;
  align-items: center;
  justify-content: flex-start;

  font-weight: ${fontWeights.bold};
  line-height: 1;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [50, 60], bases: [16, 20] },
      { prop: 'marginTop', sizes: [32, 40], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  span {
    grid-row: 1 / span 2;
    grid-column: 1;
  }

  sup,
  sub {
    justify-self: flex-start;
  }

  sup {
    grid-row: 1;
    grid-column: 2;

    margin-top: 5px;

    font-size: 1rem;
  }

  sub {
    grid-row: 2;
    grid-column: 2;

    margin-bottom: 6px;

    font-size: 0.75rem;
  }
`;

export const TicketText = styled.p`
  flex-grow: 1;
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [14, 16], unit: '' },
      { prop: 'marginTop', sizes: [32, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
