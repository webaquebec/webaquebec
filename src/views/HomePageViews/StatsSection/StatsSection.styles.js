// vendors
import styled from 'styled-components';

// utils
import { em } from 'polished';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const StatsIntro = styled.p`
  margin: 130px auto;

  color: ${colors.bleu80};
  font-weight: 700;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40], bases: 20 }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [28, 48], bases: 20 }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [80, 130], bases: 20 }],
    breakpoints.spacings
  )};

  @media (min-width: ${em(992)}) {
    max-width: 50%;
  }
`;

export const StatsList = styled.ul`
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const StatImg = styled.img`
  width: auto;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [100, 200], bases: 20 }],
    breakpoints.spacings
  )};
`;

export const StatDesc = styled.p`
  color: ${colors.gris30};
  font-weight: ${fontWeights.bold};
  text-align: center;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40], bases: 20 }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [28, 48], bases: 20 }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'margin-top', sizes: [4, -16], bases: 20 }],
    breakpoints.spacings
  )};

  @media (max-width: ${em(992)}) {
    max-width: 230px;
    margin: auto;
  }
`;
