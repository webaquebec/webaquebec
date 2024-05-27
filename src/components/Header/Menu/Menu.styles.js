// vendors
import styled, { css } from 'styled-components';

// components
import Box from '../../LayoutSections/Box';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies, fontWeights } from '../../../styles/typography';
import zIndexes from '../../../styles/zIndexes';
import colors from '../../../styles/colors';
import { speed } from '../../../styles/animation';

export const disableAnimationStyle = css`
  animation-name: none;
`;

export const MenuWrapper = styled.div`
  height: 100%;

  transition: background-color 200ms ease-in-out;
`;

export const containerStyle = css`
  ${breakpointsRange(
    [{ prop: '--top-height', sizes: [80, 230], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const navStyle = css`
  max-height: calc(100vh - var(--top-height));

  padding-right: var(--container-gutter);
  padding-bottom: calc(var(--container-gutter) * 6);
  padding-left: var(--container-gutter);

  overflow-y: auto;
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
      { prop: '--top-height', sizes: [80, 230], bases: [16, 20] },
      { prop: 'marginRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'marginLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const primaryNavListStyle = css`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [48, 40], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > * + * {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [32, 40], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const secondaryNavListStyle = css`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [64, 40], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > * + * {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [20, 36], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  > :last-child {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [65, 65], bases: [16, 20] }],
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

  :nth-child(6) {
    transition-delay: calc(500ms + var(--transition-additional-delay));
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
  color: ${colors.blueberry};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [30, 48], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [38, 60], bases: [32, 40], unit: '' },
    ],
    breakpoints.spacings
  )};

  text-decoration: none;

  &.active,
  :hover,
  :focus {
    position: relative;

    font-weight: ${fontWeights.bold};
    font-family: ${fontFamilies.redaction10};
  }

  &.active {
    display: block;

    transform: rotate(-6deg);
    transform-origin: left center;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      font-weight: inherit;
      font-family: inherit;

      content: attr(data-text);
    }

    &::before {
      color: var(--sticker-color);

      -webkit-text-stroke: 10px var(--sticker-color);
    }

    &::after {
      z-index: -2;

      color: ${colors.blueberry};

      -webkit-text-stroke: 16px ${colors.blueberry};
    }
  }
`;

export const NavSecondaryLink = styled.a`
  color: ${colors.blueberry};
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${zIndexes.modal};

  width: 100%;
  height: 100%;

  background-color: ${colors.earlyDawn};

  visibility: hidden;
  opacity: 0;

  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: visibility 500ms, opacity 500ms;
  }

  will-change: opacity, visibility;

  ${({ $opened }) => $opened && openedMenuStyle};
`;

export const SocialLink = styled.a`
  display: inline-block;

  transition: transform ${speed.fast};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
