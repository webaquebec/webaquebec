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

export const PageTitle = styled.h1`
  color: ${colors.bleu90};
`;

export const isActiveStyle = css`
  color: ${colors.bleu90};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction};

  &::after {
    display: block;
    width: 100%;
    height: 3px;

    background-color: ${colors.bleu90};

    content: '';
  }
`;

export const AboutNav = styled.nav`
  width: 100%;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [24, 70], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 116], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const AboutList = styled.ul`
  display: flex;
  margin-right: calc(var(--container-gutter) * -1);
  padding-right: var(--container-gutter);
  overflow-x: auto;

  ${greaterThan(450)} {
    justify-content: space-around;
  }
`;

export const AboutItem = styled.li`
  flex-shrink: 0;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

export const AboutLink = styled(Link)`
  color: ${colors.bleu80};
  text-decoration: none;

  transition: color 0.2s ease-in-out;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  &:hover,
  &:focus {
    ${isActiveStyle};
  }

  ${({ $isActive }) => $isActive && isActiveStyle};
`;
