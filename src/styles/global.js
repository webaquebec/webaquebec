// vendors
import { css, createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

// utils
import interpolate from '../utils/math/interpolate';

// styles
import { Redaction } from './fontFaces';
import { fontFamilies, fontWeights } from './typography';
import { lessThan, greaterThan } from '../utils/mediaQuery';
import breakpoints from './breakpoints';
import breakpointsRange from '../utils/breakpointsRange';
import colors from './colors';

export const rootStyle = css`
  --container-gutter: 16px;
  --min-container-width: 320px;
  --max-container-width: 1280px;

  font-size: ${interpolate(16, 20, 480, 1280)};

  ${lessThan(480)} {
    font-size: ${rem(16)};
  }

  ${greaterThan(1280)} {
    font-size: ${rem(20)};
  }

  /* --font-size: calc(1rem + 0.41666667vw - 1.33333333px); */
`;

export const htmlStyle = css`
  position: relative;

  width: 100%;

  margin: 0;
  padding: 0;
  overflow-x: hidden;

  background-color: ${colors.gris};
  scroll-behavior: smooth;
`;

export const bodyStyle = css`
  font-weight: ${fontWeights.regular};
  font-family: ${fontFamilies.body};
  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [26, 24], bases: [16, 20], unit: '' }],
    breakpoints.spacings
  )};
  letter-spacing: 0.1px;
`;

export const bodyMediumStyle = css`
  ${bodyStyle};

  font-weight: ${fontWeights.bold};
`;

export const bodyAltStyle = css`
  font-weight: ${fontWeights.regular};
  font-size: 1.05em;
  font-family: ${fontFamilies.redaction35};
  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [26, 28], bases: [16, 23], unit: '' }],
    breakpoints.spacings
  )};
  /* line-height: ${28 / 23}; */
  letter-spacing: 0.1px;
`;

export const bodyAltMediumStyle = css`
  ${bodyAltStyle};

  font-weight: ${fontWeights.bold};
`;

export const h1Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [48, 60], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [52, 66], bases: [48, 60], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h1AltStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [54, 68], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [59, 75], bases: [54, 68], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h2Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [32, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [38, 48], bases: [32, 40], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h3Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [28, 36], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 42], bases: [28, 36], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h4Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [25, 32], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [29, 38], bases: [25, 32], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h5Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [23, 28], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [28, 34], bases: [23, 28], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h6Style = css`
  font-weight: ${fontWeights.medium};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [19, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [22, 28], bases: [19, 24], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const h6AltStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [21, 27], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [25, 32], bases: [21, 27], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const introStyle = css`
  color: ${colors.bleu90};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 30], bases: [18, 20], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const magnifyStyle = css`
  color: ${colors.bleu};

  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [30, 48], bases: [24, 40], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const unbreakableStringStyle = css`
  word-break: keep-all;
`;

export const unstyledLinkStyle = css`
  color: inherit;
  text-decoration: inherit;
`;

export const titleStyle = css``;

export const caption1Style = css`
  font-weight: ${fontWeights.regular};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 19], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const caption1MediumStyle = css`
  ${caption1Style};

  font-weight: ${fontWeights.medium};
`;

export const caption2Style = css`
  font-weight: ${fontWeights.regular};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 12], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [16, 16], bases: [12, 12], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const caption2MediumStyle = css`
  ${caption2Style};

  font-weight: ${fontWeights.medium};
`;

export const caption3Style = css`
  font-weight: ${fontWeights.regular};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [11, 11], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [13, 13], bases: [11, 11], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const caption3MediumStyle = css`
  ${caption3Style};

  font-weight: ${fontWeights.medium};
`;

export const pixelatedStyle = css`
  font-family: ${fontFamilies.redaction};
`;

export const pixelated10Style = css`
  font-family: ${fontFamilies.redaction10};
`;

export const pixelated20Style = css`
  font-family: ${fontFamilies.redaction20};
`;

export const pixelated35Style = css`
  font-family: ${fontFamilies.redaction35};
`;

export const pixelated50Style = css`
  font-family: ${fontFamilies.redaction50};
`;

export const pixelated70Style = css`
  font-family: ${fontFamilies.redaction70};
`;

export const pixelated100Style = css`
  font-family: ${fontFamilies.redaction100};
`;

export const linkStyle = css``;

export const externalLinkStyle = css``;

export const paragraphStyle = css``;

export const blockquoteStyle = css`
  color: ${colors.bleu80};

  font-weight: ${fontWeights.bold};
  text-align: center;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const unstyledListStyle = css`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const unorderListStyle = css`
  ${unstyledListStyle};
`;

export const orderListStyle = css``;

export const GlobalStyle = createGlobalStyle`
  ${Redaction};

  :root {
    ${rootStyle};
  }

  html {
    ${htmlStyle};
  }

  body {
    ${bodyStyle};
  }

  blockquote {
    ${blockquoteStyle};
  }

  img {
    max-width: 100%;
  }

  .blog-post {
    ul {
      padding-left: 32px;
      
      list-style: none;

      ul {
        margin-top: 16px;
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
    }
    
    ol {
      padding-left: 32px;

      list-style: none;

      counter-reset: li;

      ol {
        margin-top: 16px;
      }

      li {
        margin-bottom: 16px;

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
    }
  }
`;
