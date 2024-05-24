// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const SectionContainer = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [32, 50], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [80, 176], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const StatsList = styled.ul`
  align-items: flex-end;
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

export const StatImg = styled.img`
  ${breakpointsRange(
    [{ prop: 'width', sizes: [150, 250], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StatDescription = styled.p`
  margin-right: auto;
  margin-left: auto;

  color: ${colors.blueberry10};
  font-weight: ${fontWeights.bold};

  text-align: center;
  word-break: normal;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 30], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [29, 48], bases: [24, 40], unit: '' },
      { prop: 'marginTop', sizes: [16, 40], bases: [16, 20] },
      { prop: 'maxWidth', sizes: [200, 300], bases: [16, 20] },
    ],

    breakpoints.spacings
  )};
`;
