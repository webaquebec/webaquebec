// vendors
import styled from 'styled-components';
import { Link } from 'gatsby';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';

// styles
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const StyledNav = styled.nav`
  position: relative;

  display: flex;
`;

export const PrimaryNavList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 38px;
  align-items: center;

  margin: 0;

  ${lessThan(breakpoints[6])} {
    display: none;
  }
`;

export const NavListItem = styled.li`
  display: flex;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  position: relative;

  display: flex;
  align-items: center;

  height: 45px;

  color: ${colors.gris};
  text-decoration: none;

  :focus {
    outline: 0;
  }

  ::before,
  ::after {
    position: absolute;
    right: -1px;
    bottom: 0;
    left: 0;

    height: 2px;

    background-color: currentColor;
    mix-blend-mode: overlay;

    @media (prefers-reduced-motion: no-preference) {
      transition: transform 0.2s ease-in-out;
    }

    content: '';
  }

  ::before {
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
  }

  ::after {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }

  &.active::before,
  :hover::before,
  :focus::before {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  &.active::after,
  :hover::after,
  :focus::after {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }
`;

export const LogoWrapper = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

export const Logo = styled.img``;

export const MenuButtonWrapper = styled.div`
  grid-row: 1;
  grid-column: 3;
  justify-self: flex-end;
`;

export const BurgerButton = styled.button`
  position: relative;

  background: none;
  border: 0;
  cursor: pointer;

  appearance: none;
`;

export const BurgerImg = styled.img`
  max-width: 100%;
  height: 56px;
`;

export const StyledHeader = styled.header`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [20, 57], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [20, 57], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;
