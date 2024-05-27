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

export const fadedStyle = css`
  filter: grayscale(1) opacity(0.5) contrast(0.8) brightness(1);
`;

export const timeTag = css`
  display: none;

  ${lessThan(1248)} {
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

export const groupedUpStyle = css`
  border-top: 0;
  border-radius: 0 0 16px 16px;
`;

export const groupedDownStyle = css`
  border-radius: 16px 16px 0 0;
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

export const CardWrapper = styled.div`
  ${({ $faded }) => $faded && fadedStyle};

  @media (prefers-reduced-motion: no-preference) {
    transition: filter ${speed.fast} ease;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  z-index: 1;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [12, 16], bases: [16, 20] }],
    [{ prop: 'fontSize', sizes: [22, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  color: ${colors.blueberry30};
  font-weight: ${fontWeights.ultrabold};

  border-bottom: 2px solid ${colors.blueberry};

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${speed.fast} ease;
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [12, 16], bases: [16, 20] }],
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
  --accentColor: ${({ $accentColor }) => $accentColor};

  position: relative;
  z-index: 1;

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

  ${greaterThan(1248)} {
    border-radius: 16px;

    ${({ $groupedUp }) => $groupedUp && groupedUpStyle}

    ${({ $groupedDown }) => $groupedDown && groupedDownStyle}
  }

  &::after {
    position: absolute;
    top: 0;
    left: -2px;
    z-index: 0;

    display: block;
    width: calc(100% + 4px);
    height: 100%;

    background-color: var(--accentColor);

    ${greaterThan(1248)} {
      border-radius: inherit;

      ${({ $groupedUp }) => $groupedUp && groupedUpStyle}

      ${({ $groupedDown }) => $groupedDown && groupedDownStyle}
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

    ${CardWrapper} {
      filter: none;
    }

    ${CardHeader} {
      border-color: var(--accentColor);
    }
  }
`;
