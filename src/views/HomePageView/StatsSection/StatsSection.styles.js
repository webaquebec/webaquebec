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
      { prop: 'paddingBottom', sizes: [80, 176], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const StatsList = styled.ul`
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [32, 0], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StatDescription = styled.p`
  color: ${colors.bleu};
  font-weight: ${fontWeights.bold};
  text-align: center;
  word-break: normal;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [29, 48], bases: [24, 40], unit: '' },
      { prop: 'margin-top', sizes: [16, 40], bases: [16, 20] },
    ],

    breakpoints.spacings
  )};

  @media (max-width: ${em(992)}) {
    max-width: 230px;
    margin-right: auto;
    margin-left: auto;
  }
`;
