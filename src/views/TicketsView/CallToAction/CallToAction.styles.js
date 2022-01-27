// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';

export const CtaTitle = styled.h2`
  color: ${colors.bleu80};
`;

export const ctaButton = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
