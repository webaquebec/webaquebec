// vendors
import styled, { css } from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

// styles
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpointsRange from '../../../utils/breakpointsRange';

export const defaultStyle = css`
  /* margin-block: 1em;
  margin-inline: 0; */

  /* padding-inline-start: 40px; */

  ${breakpointsRange(
    [{ prop: 'paddingInlineStart', sizes: [15, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const OrderedList = styled.ol`
  &,
  ol {
    ${defaultStyle};

    list-style: none;

    counter-reset: li;
  }

  ol,
  li:not(:first-of-type) {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [14, 16], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  li {
    counter-increment: li;
  }

  li::before {
    display: inline-block;

    width: 1.3em;
    margin-left: -1.3em;

    color: ${colors.bleu80};
    font-weight: ${fontWeights.bold};

    direction: rtl;

    content: '.' counter(li);
  }

  li li::before {
    content: '.' counter(li, lower-alpha);
  }

  li li li::before {
    width: 1.8em;
    margin-left: -1.8em;

    content: '(' counter(li) ')';
  }
`;

export const UnorderedList = styled.ul`
  &,
  ul {
    ${defaultStyle};

    list-style: none;
  }

  li {
    margin-bottom: 16px;
  }

  li::before {
    display: inline-block;

    width: 1em;
    margin-left: -1em;

    color: ${colors.bleu80};
    font-weight: ${fontWeights.bold};

    content: '•';
  }

  li li::before {
    content: '○';
  }

  li li li::before {
    content: '-';
  }
`;
