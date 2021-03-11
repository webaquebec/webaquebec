// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { magnifyStyle } from '../../../styles/global';
import breakpoints from '../../../styles/breakpoints';

export const SectionContainer = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [116, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 134], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.p`
  ${magnifyStyle};

  max-width: 533px;
  margin-top: 0;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [31, 47], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
