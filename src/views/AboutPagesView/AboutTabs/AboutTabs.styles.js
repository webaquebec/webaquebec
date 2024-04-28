// vendors
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan, lessThan } from '../../../utils/mediaQuery';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import { speed } from '../../../styles/animation';

export const PageTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 110], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const TextureWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const hoverFocusStyle = css`
  &::after {
    background-color: ${colors.blueberry};
  }
`;

export const isActiveStyle = css`
  ${hoverFocusStyle};

  font-weight: ${fontWeights.ultrabold};
`;

export const AboutNav = styled.nav`
  width: 100%;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [90, 72], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 116], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const AboutList = styled.ul`
  display: flex;
  gap: calc(var(--container-gutter) * 2);
  margin-right: calc(var(--container-gutter) * -1);
  margin-left: calc(var(--container-gutter) * -1);
  padding-right: var(--container-gutter);
  padding-bottom: var(--container-gutter);
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  ${greaterThan(576)} {
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }
`;

export const AboutItem = styled.li`
  flex-shrink: 0;

  ${breakpointsRange(
    [{ prop: 'minWidth', sizes: [137, 225], bases: [16, 20] }],
    [breakpoints.spacings]
  )};

  ${lessThan(360)} {
    min-width: ${107 / 16}rem;
  }

  ${greaterThan(576)} {
    margin: 0;
  }
`;

export const AboutLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;

  align-items: center;

  color: ${colors.blueberry};
  font-weight: ${fontWeights.medium};
  text-decoration: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: color ${speed.fast};
  }

  will-change: color;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  &::after {
    display: block;
    width: 100%;
    height: 4px;

    background-color: transparent;

    @media (prefers-reduced-motion: no-preference) {
      transition: background-color ${speed.fast};
    }

    content: '';

    will-change: background-color;
  }

  &:hover,
  &:focus {
    ${hoverFocusStyle};
  }

  ${({ $isActive }) => $isActive && isActiveStyle};
`;
