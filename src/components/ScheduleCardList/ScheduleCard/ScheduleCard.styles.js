// vendors
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// components
import TimeStamp from '../../TimeStamp';

// utils
import { greaterThan, lessThan } from '../../../utils/mediaQuery';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { speed } from '../../../styles/animation';
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const placeStyle = css`
  position: relative;
  z-index: 1;

  color: ${colors.blueberry30};
  font-weight: ${fontWeights.ultrabold};
  font-size: 24px;

  border-bottom: 2px solid ${colors.blueberry};

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${speed.fast} ease;
  }

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [12, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const timeTag = css`
  display: none;

  ${lessThan(1384)} {
    display: block;

    width: max-content;

    margin-bottom: 12px;

    color: white;

    color: ${colors.peach};
    font-weight: 800;

    line-height: ${20 / 14};

    background-color: ${colors.blueberry10};

    border-radius: 8px;

    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [14, 14], bases: [16, 20] },
        { prop: 'padding', sizes: [8, 8], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }
`;

export const noTimeStyle = css`
  ${breakpointsRange(
    [{ prop: 'padding-left', sizes: [16, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StyledTimeStamp = styled(TimeStamp)``;

export const Title = styled.h2`
  color: ${colors.blueberry};

  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 20], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;

  ${breakpointsRange(
    [
      { prop: 'paddingLeft', sizes: [12, 16], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [12, 16], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [12, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  &:first-child {
    ${breakpointsRange(
      [{ prop: 'paddingTop', sizes: [12, 16], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const StyledScheduleCard = styled(Link)`
  --accentColor: ${({ $accentColor }) => $accentColor || colors.gris90};

  position: relative;

  display: block;

  width: 100%;
  height: 100%;

  text-decoration: none;

  background-color: ${colors.peach};
  border: 2px solid ${colors.blueberry};
  outline: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${speed.fast} ease;
  }

  cursor: pointer;

  ${breakpointsRange(
    [{ prop: 'margin-bottom', sizes: [20, 36], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(1024)} {
    border-radius: 16px;
    ${({ $groupedUp }) =>
      $groupedUp && 'border-radius: 0 0 16px 16px;\nborder-top: 0;'}
    ${({ $groupedDown }) => $groupedDown && 'border-radius: 16px 16px 0 0;'}
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 100%;

    background-color: var(--accentColor);

    ${greaterThan(1024)} {
      border-radius: 16px;
      ${({ $groupedUp }) =>
        $groupedUp && 'border-radius: 0 0 16px 16px;\nborder-top: 0;'}
      ${({ $groupedDown }) => $groupedDown && 'border-radius: 16px 16px 0 0;'}
    }

    @media (prefers-reduced-motion: no-preference) {
      transition: opacity ${speed.fast} ease;
    }

    opacity: 0;

    content: '';
  }

  :hover,
  :focus {
    border-color: var(--accentColor);

    &::after {
      opacity: 0.1;
    }

    .card-place {
      border-color: var(--accentColor);
    }
  }
`;
