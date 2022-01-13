// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { magnifyStyle } from '../../../styles/global';
import breakpoints from '../../../styles/breakpoints';

export const Title = styled.p`
  ${magnifyStyle};

  max-width: 587px;
  margin-top: 0;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [31, 47], bases: [16, 20] }],
    breakpoints.spacings
  )};

  > sup {
    line-height: 1;
  }
`;

export const Section = styled.section`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [200, 218], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
