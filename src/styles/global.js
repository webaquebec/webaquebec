// vendors
import { css, createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

// utils
import interpolate from '../utils/math/interpolate';
import { lessThan, greaterThan } from '../utils/mediaQuery';

// styles
import { fontFamilies, fontWeights } from './typography';
import { speed } from './animation';
import breakpoints from './breakpoints';
import breakpointsRange from '../utils/breakpointsRange';
import colors from './colors';

export const rootStyle = css`
  --container-gutter: 16px;
  --min-container-width: 320px;
  --max-container-width: 1280px;
  --max-content-post-width: 854px;

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

  /* Do not add overflow: hidden on html style which causing issue with sticky header */
  scroll-behavior: smooth;
`;

export const bodyStyle = css`
  position: relative;

  overflow-x: hidden;

  font-weight: ${fontWeights.regular};
  font-family: ${fontFamilies.body};
  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [22, 30], bases: [16, 20], unit: '' }],
    breakpoints.spacings
  )};
  letter-spacing: 0.1px;

  &.Modal--open {
    overflow: hidden;
  }
`;

export const bodyMediumStyle = css`
  ${bodyStyle};

  font-weight: ${fontWeights.bold};
`;

export const bodyAltStyle = css`
  font-weight: ${fontWeights.regular};
  font-size: 1.05em;
  font-family: ${fontFamilies.redaction10};
  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [26, 28], bases: [16, 23], unit: '' }],
    breakpoints.spacings
  )};

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
  color: ${colors.blueberry};

  font-weight: ${fontWeights.ultrabold};
  font-family: ${fontFamilies.radioGrotesk};
  text-transform: lowercase;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [36, 164], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [39, 90], bases: [36, 96], unit: '' },
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
  font-family: ${fontFamilies.redaction10};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [21, 27], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [25, 32], bases: [21, 27], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const introStyle = css`
  color: ${colors.blueberry10};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 30], bases: [18, 20], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const magnifyStyle = css`
  color: ${colors.blueberry10};

  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 48], bases: [20, 40], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const billboardStyle = css`
  color: ${colors.blueberry10};

  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction10};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [125, 200], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [50, 160], bases: [64, 200], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const billboardAltStyle = css`
  ${billboardStyle}

  font-weight: ${fontWeights.regular};
  font-style: italic;
`;

export const unbreakableStringStyle = css`
  word-break: keep-all;
`;

export const unstyledLinkStyle = css`
  color: inherit;
  text-decoration: inherit;
`;

export const captionStyle = css`
  display: block;

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [13, 13], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [13, 13], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const caption1Style = css`
  ${captionStyle}

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
  ${captionStyle}

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
  ${captionStyle}

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
  font-family: ${fontFamilies.redaction10};
`;

export const linkStyle = css`
  color: ${colors.blueberry10};
  font-weight: ${fontWeights.medium};

  :focus,
  :hover {
    text-decoration: none;
  }
`;

/** FIXME: Broken style on word break. Find a working way to achieve the same result */
export const linkStyleAlt = css`
  position: relative;

  z-index: 1;

  display: inline-block;

  color: ${colors.blueberry10};
  text-decoration: none;

  outline-offset: -1px;

  @media (prefers-reduced-motion: no-preference) {
    transition: color ${speed.superfast};
  }

  ::after {
    position: absolute;
    bottom: 2px;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-color: ${colors.blueberry};

    scale: 1 0.1;
    transform-origin: bottom;

    @media (prefers-reduced-motion: no-preference) {
      transition: scale ${speed.fast};
    }

    content: '';
  }

  :hover,
  :focus {
    color: ${colors.white};

    ::after {
      scale: 1 0.87;
    }
  }
`;

export const externalLinkStyle = css``;

export const paragraphStyle = css``;

export const unstyledListStyle = css`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const orderedListCounterStyle = css`
  display: inline-block;

  /* width: 1.3em; */
  margin-inline-end: 0.3em;

  color: ${colors.blueberry};
  font-weight: ${fontWeights.bold};

  /* direction: rtl; */

  content: counter(li) '.';
  counter-increment: li;
`;

export const orderedListStyle = css`
  &,
  ol {
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

  /* li {
    counter-increment: li;
  } */

  > li::before {
    ${orderedListCounterStyle}
  }

  > li ol > li::before {
    ${orderedListCounterStyle}

    margin-inline-start: 0.675em;

    /* margin-left: 0.675em; */

    content: counter(li, lower-alpha) '.';
  }

  > li ol > li ol > li::before {
    ${orderedListCounterStyle}

    margin-inline-start: 2em;

    content: '(' counter(li) ')';
  }
`;

export const unorderedListStyle = css`
  &,
  ul {
    list-style: none;
  }

  li {
    position: relative;

    margin-bottom: 16px;
    padding-left: 30px;
  }

  li::before {
    position: absolute;
    left: 0;

    display: block;

    /* width: 1em; */
    margin-inline-end: 0.5em;
    margin-inline-start: 0.7em;

    color: ${colors.blueberry};
    font-weight: ${fontWeights.bold};

    content: '•';
  }

  li li::before {
    margin-inline-start: 1.7em;

    content: '○';
  }

  li li li::before {
    margin-inline-start: 3.2em;

    content: '-';
  }
`;

export const unorderedListStyleAlt = css`
  ${unstyledListStyle};

  li {
    display: inline-flex;
    align-items: center;
  }

  li::before {
    display: inline-block;
    margin-right: 12px;
    margin-left: 8px;

    color: ${colors.blueberry};
    font-size: 30px;
    line-height: 0;

    content: '•';
  }
`;

export const pictureFilter = css`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 100%;

    background-color: ${colors.blueberry};
    opacity: 0.5;
    mix-blend-mode: color;

    @media (prefers-reduced-motion: no-preference) {
      transition: background-color ${speed.fast};
    }

    content: '';
  }

  img {
    filter: grayscale();

    @media (prefers-reduced-motion) {
      transition: filter ${speed.fast};
    }
  }
`;

export const resetStyle = css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    color: inherit;

    word-break: break-word;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    ${rootStyle};
  }

  html {
    ${htmlStyle};
  }

  body {
    ${bodyStyle};
  }

  ${resetStyle};
`;
