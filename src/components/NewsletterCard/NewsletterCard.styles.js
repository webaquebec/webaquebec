// vendors
import styled, { css } from 'styled-components';

// styles
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';
import { fontFamilies, fontWeights } from '../../styles/typography';

export const NewsletterCardTitle = styled.h2`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [64, 144] },
      { prop: 'maxWidth', sizes: [350, 800] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  display: flex;
  flex-flow: column nowrap;

  margin-right: auto;
  margin-bottom: 64px;
  margin-left: auto;

  line-height: 0.9;

  .top {
    align-self: flex-start;

    font-weight: ${fontWeights.regular};
    font-family: ${fontFamilies.redaction};
    font-style: italic;
  }

  .bottom {
    align-self: flex-end;

    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.redaction};
  }
`;

export const NewsletterPaperCard = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [132, 120] },
      { prop: 'paddingRight', sizes: [30, 300] },
      { prop: 'paddingBottom', sizes: [132, 120] },
      { prop: 'paddingLeft', sizes: [30, 300] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;
