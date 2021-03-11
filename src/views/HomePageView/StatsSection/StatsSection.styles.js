// vendors
import styled from 'styled-components';

// utils
import { em } from 'polished';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const SectionContainer = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [80, 173], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [80, 130], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const StatsIntro = styled.p`
  margin-top: 0;

  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [29, 48], bases: [24, 40], unit: '' },
      { prop: 'marginBottom', sizes: [80, 130], bases: [16, 20] },
    ],
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
  width: 100%;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [100, 200], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StatDescription = styled.p`
  color: ${colors.gris30};
  font-weight: ${fontWeights.bold};
  text-align: center;
  word-break: normal;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [29, 48], bases: [24, 40], unit: '' }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'margin-top', sizes: [4, -16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  @media (max-width: ${em(992)}) {
    max-width: 230px;
    margin: auto;
  }
`;
