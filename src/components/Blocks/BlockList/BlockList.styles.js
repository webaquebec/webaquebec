// vendors
import styled, { css } from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { orderedListStyle, unorderedListStyle } from '../../../styles/global';

export const defaultStyle = css`
  /* ${breakpointsRange(
    [{ prop: 'paddingInlineStart', sizes: [15, 40], bases: [16, 20] }],
    breakpoints.spacings
  )}; */
`;

export const OrderedList = styled.ol`
  ${orderedListStyle}

  &,
  ol {
    ${defaultStyle}
  }
`;

export const UnorderedList = styled.ul`
  ${unorderedListStyle}

  &,
  ul {
    ${defaultStyle};
  }
`;
