// vendors
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontFamilies, fontWeights } from '../../../styles/typography';
import { speed } from '../../../styles/animation';

export const PageTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const hoverFocusStyle = css`
  &::after {
    display: block;
    width: 85%;
    height: 2px;

    background-color: currentColor;

    @media (prefers-reduced-motion: no-preference) {
      transition: background-color ${speed.fast};
    }

    content: '';

    will-change: background-color;
  }
`;

export const isActiveStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction};

  ${hoverFocusStyle};
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
  margin-right: calc(var(--container-gutter) * -1);
  padding-right: var(--container-gutter);
  padding-bottom: var(--container-gutter);
  overflow-x: auto;

  ${greaterThan(450)} {
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }
`;

export const AboutItem = styled.li`
  flex-shrink: 0;
  margin-right: 30px;

  ${breakpointsRange(
    [{ prop: 'minWidth', sizes: [147, 225], bases: [16, 20] }],
    breakpoints.spacings
  )};

  &:last-child {
    margin-right: 0;
  }

  ${greaterThan(450)} {
    margin: 0;
  }
`;

export const AboutLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;

  align-items: center;

  color: ${({ $isActive }) => ($isActive ? colors.bleu90 : colors.bleu)};
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

  &:hover,
  &:focus {
    ${hoverFocusStyle};
  }

  ${({ $isActive }) => $isActive && isActiveStyle};
`;
