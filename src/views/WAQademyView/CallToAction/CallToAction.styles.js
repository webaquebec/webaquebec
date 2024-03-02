// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';

export const ctaButtonStyle = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CTATitle = styled.h2`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};

  color: ${colors.blueberry};
`;
