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

  font-size: ${interpolate(16, 20, 320, 1280)};

  ${lessThan(320)} {
    font-size: ${rem(16)};
  }

  ${greaterThan(1280)} {
    font-size: ${rem(20)};
  }

  /* --font-size: calc(1rem + 0.41666667vw - 1.33333333px); */
`;

export const htmlStyle = css`
  scroll-behavior: smooth;
`;

export const bodyStyle = css`
  font-weight: ${fontWeights.regular};
  font-family: ${fontFamilies.body};
  line-height: ${25 / 16};
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
  line-height: ${28 / 23};
  letter-spacing: 0.1px;
`;

export const bodyAltMediumStyle = css`
  ${bodyAltStyle};

  font-weight: ${fontWeights.bold};
`;

export const h1Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [48, 60] }],
    breakpoints.spacings
  )};

  line-height: ${66 / 60};
`;

export const h1AltStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [54, 68] }],
    breakpoints.spacings
  )};

  line-height: ${75 / 68};
`;

export const h2Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [32, 40] }],
    breakpoints.spacings
  )};

  line-height: ${48 / 40};
`;

export const h3Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [28, 36] }],
    breakpoints.spacings
  )};

  line-height: ${42 / 36};
`;

export const h4Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [25, 32] }],
    breakpoints.spacings
  )};

  line-height: ${38 / 32};
`;

export const h5Style = css`
  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [23, 28] }],
    breakpoints.spacings
  )};

  line-height: ${34 / 28};
`;

export const h6Style = css`
  font-weight: ${fontWeights.medium};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [19, 24] }],
    breakpoints.spacings
  )};

  line-height: ${28 / 24};
`;

export const h6AltStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [21, 27] }],
    breakpoints.spacings
  )};

  line-height: ${32 / 27};
`;

export const introStyle = css`
  color: ${colors.bleu90};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 20] }],
    breakpoints.spacings
  )};

  line-height: ${30 / 20};
`;

export const magnifyStyle = css`
  color: ${colors.bleu};

  font-weight: ${fontWeights.bold};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40] }],
    breakpoints.spacings
  )};

  line-height: ${52 / 40};
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
  font-size: ${rem(16)};
  line-height: ${19 / 16};
`;

export const caption1MediumStyle = css`
  ${caption1Style};

  font-weight: ${fontWeights.medium};
`;

export const caption2Style = css`
  font-weight: ${fontWeights.regular};
  font-size: ${rem(12)};
  line-height: ${16 / 12};
`;

export const caption2MediumStyle = css`
  ${caption2Style};

  font-weight: ${fontWeights.medium};
`;

export const caption3Style = css`
  font-weight: ${fontWeights.regular};
  font-size: ${rem(11)};
  line-height: ${13 / 11};
`;

export const caption3MediumStyle = css`
  ${caption3Style};

  font-weight: ${fontWeights.medium};
`;

export const linkStyle = css``;

export const externalLinkStyle = css``;

export const paragraphStyle = css``;

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
`;
