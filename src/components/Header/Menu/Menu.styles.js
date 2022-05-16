// vendors
import styled, { css, keyframes } from 'styled-components';

// components
import Box from '../../LayoutSections/Box';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies, fontWeights } from '../../../styles/typography';
import zIndexes from '../../../styles/zIndexes';
import colors from '../../../styles/colors';

const gradientAnimation = keyframes`
  0% {
    background-position: 0;
  }

  50% {
    background-position: 1200%;
  }

  100% {
    background-position: 0;
  }
`;

export const closeButtonStyle = css`
  position: relative;
  inset: 0;
`;

export const disableAnimationStyle = css`
  animation-name: none;
`;

export const containerStyle = css`
  ${breakpointsRange(
    [{ prop: '--top-height', sizes: [99, 227], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const navStyle = css`
  max-height: calc(100vh - var(--top-height));

  padding-right: var(--container-gutter);
  padding-bottom: 30px;
  padding-left: var(--container-gutter);

  overflow-y: auto;
`;

export const Gradient = styled.div`
  --jaune-start: ${colors.jaune80};
  --jaune-end: ${colors.jaune30};
  --turquoise-start: ${colors.turquoise80};
  --turquoise-end: ${colors.turquoise30};
  --rose-start: ${colors.rose80};
  --rose-end: ${colors.rose30};
  --ciel-start: ${colors.ciel80};
  --ciel-end: ${colors.ciel30};
  --gradient-color-start: ${({ color }) => `var(--${color}-start)`};
  --gradient-color-end: ${({ color }) => `var(--${color}-end)`};

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(
    90deg,
    var(--gradient-color-start),
    var(--gradient-color-end),
    var(--gradient-color-start)
  );
  background-size: 1200% 100%;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};

  animation: ${gradientAnimation} 150s linear infinite;
  animation-play-state: ${({ isVisible }) =>
    isVisible ? 'running' : 'paused'};

  ${({ isActive, restartAnimation }) =>
    (!isActive || restartAnimation) && disableAnimationStyle};

  content: '';

  will-change: background-position;

  @media (prefers-reduced-motion: reduce) {
    ${disableAnimationStyle};
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  height: var(--top-height);

  padding-right: var(--container-gutter);
  padding-left: var(--container-gutter);

  ${breakpointsRange(
    [
      // { prop: 'paddingTop', sizes: [20, 57], bases: [16, 20] },
      // { prop: 'paddingBottom', sizes: [20, 57], bases: [16, 20] },
      { prop: '--top-height', sizes: [99, 227], bases: [16, 20] },
      { prop: 'marginRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'marginLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const LogoWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

export const Logo = styled.img`
  display: block;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [59, 113], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ButtonWrapper = styled.div`
  grid-row: 1;
  grid-column: 3;
  justify-self: flex-end;
`;

export const primaryNavListStyle = css`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [35, 145], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [35, 145], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > * + * {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [32, 80], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  /* > :last-child {
    ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [65, 114], bases: [16, 20] }],
    breakpoints.spacings
  )};
  } */
`;

export const secondaryNavListStyle = css`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [35, 145], bases: [16, 20] },
      // { prop: 'marginBottom', sizes: [72, 145], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > * + * {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [28, 40], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  > :last-child {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [65, 114], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const ListItem = styled.li`
  --transition-additional-delay: 0ms;
  --translate-y: -30px;

  transform: translate3d(0, var(--translate-y), 0);
  opacity: 0;

  transition: opacity 250ms, transform 500ms;

  will-change: opacity, transform;

  :first-child {
    transition-delay: var(--transition-additional-delay);
  }

  :nth-child(2) {
    transition-delay: calc(100ms + var(--transition-additional-delay));
  }

  :nth-child(3) {
    transition-delay: calc(200ms + var(--transition-additional-delay));
  }

  :nth-child(4) {
    transition-delay: calc(300ms + var(--transition-additional-delay));
  }

  :nth-child(5) {
    transition-delay: calc(400ms + var(--transition-additional-delay));
  }

  img {
    ${breakpointsRange(
      [{ prop: 'maxHeight', sizes: [23, 33], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NavPrimaryLink = styled.a`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [32, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [60, 48], bases: [32, 40], unit: '' },
    ],
    breakpoints.spacings
  )};

  text-decoration: none;

  &.active,
  :hover,
  :focus {
    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.redaction10};
  }
`;

export const NavSecondaryLink = styled.a`
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [36, 33], bases: [18, 24], unit: '' },
    ],
    breakpoints.spacings
  )};

  text-decoration: none;

  &.active,
  :hover,
  :focus {
    font-weight: ${fontWeights.bold};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr auto 1fr;
`;

export const openedMenuStyle = css`
  visibility: visible;
  opacity: 1;

  pointer-events: auto;

  ul > li {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const Container = styled(Box)`
  /* ${breakpointsRange(
    [{ prop: '--frame-width', sizes: [5, 10], bases: [16, 20] }],
    breakpoints.spacings
  )}; */

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${zIndexes.modal};

  width: 100%;
  height: 100%;

  background-color: ${colors.gris};

  visibility: hidden;
  opacity: 0;

  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: visibility 500ms, opacity 500ms;
  }

  will-change: opacity, visibility;

  ${({ $opened }) => $opened && openedMenuStyle};
`;
