// vendors
import styled, { css } from 'styled-components';

// components
import Box from '../../LayoutSections/Box';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';
import zIndexes from '../../../styles/zIndexes';

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [20, 57], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [20, 57], bases: [16, 20] },
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

export const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  appearance: none;
`;

export const IconCross = styled.img``;

export const PrimaryNavList = styled.ul`
  display: grid;
  grid-row-gap: 38px;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [72, 145], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [72, 145], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [10, 40], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [10, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > li {
    transform: translate3d(0, -30px, 0);
    opacity: 0;

    @media (prefers-reduced-motion: no-preference) {
      transition: opacity 250ms, transform 500ms;
    }
  }

  > li:nth-child(2) {
    transition-delay: 100ms;
  }

  > li:nth-child(3) {
    transition-delay: 200ms;
  }
`;

export const NavLink = styled.a`
  font-weight: ${fontWeights.semiBold};
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 48], bases: [20, 40], unit: '' },
    ],
    breakpoints.spacings
  )};

  text-decoration: none;
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

  ::before,
  ::after {
    transform: translate3d(0, 0, 0);
  }

  ul > li {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const Container = styled(Box)`
  ${breakpointsRange(
    [{ prop: '--frame-width', sizes: [5, 10], bases: [16, 20] }],
    breakpoints.spacings
  )};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: ${zIndexes.modal};

  width: 100%;
  height: 100%;

  background-color: white;

  visibility: hidden;
  opacity: 0;

  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: visibility 500ms, opacity 500ms;
  }

  will-change: opacity, visibility;

  ::before,
  ::after {
    position: absolute;

    width: calc(100% + var(--frame-width));
    height: calc(100% + var(--frame-width));

    ${breakpointsRange(
      [{ prop: 'border-width', sizes: [10, 20], bases: [16, 20] }],
      breakpoints.spacings
    )};

    border-style: solid;

    content: '';

    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      transition: transform 500ms;
    }
  }

  ::before {
    top: 0;
    left: 0;

    border-right-width: 0;
    border-bottom-width: 0;

    transform: translate3d(
      calc(var(--frame-width) * -1),
      calc(var(--frame-width) * -1),
      0
    );
  }

  ::after {
    right: 0;
    bottom: 0;

    border-top-width: 0;
    border-left-width: 0;

    transform: translate3d(var(--frame-width), var(--frame-width), 0);
  }

  ${({ $opened }) => $opened && openedMenuStyle};
`;
