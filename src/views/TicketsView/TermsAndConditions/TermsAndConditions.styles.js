// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { h2Style } from '../../../styles/global';
import colors from '../../../styles/colors';

export const TermsTitle = styled.h2`
  ${h2Style}

  display: inline-block;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [20, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Link = styled.a`
  position: relative;

  color: inherit;
  text-decoration: none;

  border-bottom: 2px solid ${colors.blueberry10};
`;
