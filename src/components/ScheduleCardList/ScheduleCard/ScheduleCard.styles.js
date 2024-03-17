// vendors
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// components
import Paper from '../../Paper';
import TimeStamp from '../../TimeStamp';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import getContrast from '../../../utils/getContrast';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const Container = styled(Paper)`
  ${breakpointsRange(
    [
      { prop: 'padding-top', sizes: [16, 20], bases: [16, 20] },
      { prop: 'padding-right', sizes: [16, 20], bases: [16, 20] },
      { prop: 'padding-bottom', sizes: [16, 20], bases: [16, 20] },
      { prop: 'padding-left', sizes: [16, 20], bases: [16, 20] },
      { prop: 'margin-bottom', sizes: [20, 36], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

height: 100%;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    border: 2px solid var(--accentColor);
    border-radius: inherit;

    opacity: 0;

    content: '';

    will-change: opacity;
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
    [{ prop: 'fontSize', sizes: [20, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};

  line-height: ${26 / 20};
`;

export const Content = styled.div`
  font-weight: ${fontWeights.regular};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  line-height: ${23 / 16};
`;

export const StyledScheduleCard = styled(Link)`
  --accentColor: ${({ $accentColor }) => $accentColor || colors.gris90};

  position: relative;

  text-decoration: none;

  cursor: pointer;

  display: block;
  height: 100%;

  :hover,
  :focus {
    outline: none;

    ${Container}::after {
      opacity: 1;
    }

    ${StyledTimeStamp} {
      background-color: var(--accentColor);
      border-color: var(--accentColor);

      > * {
        color: ${({ $accentColor }) =>
          $accentColor && getContrast($accentColor)};
      }
    }
  }
`;
