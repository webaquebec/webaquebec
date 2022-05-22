// vendors
import styled from 'styled-components';

// utils
import { em } from 'polished';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';
import { titleStyle } from '../../../styles/global';

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

export const StatNumber = styled.span`
  ${titleStyle};
  width: 100%;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [150, 180], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [140, 160], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > span {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [150, 180], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [140, 160], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }
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
