// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';

export const LogoWrapperStyle = css`
  display: block;
  margin: 0;

  line-height: 0;
`;

export const Img = styled.img`
  display: block;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [24, 55], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
