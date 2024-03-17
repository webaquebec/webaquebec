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
import { fontWeights, fontFamilies } from '../../../styles/typography';

export const Container = styled(Paper)`
  ${breakpointsRange(
    [
      { prop: 'padding-top', sizes: [12, 16], bases: [16, 20] },
      { prop: 'padding-right', sizes: [12, 16], bases: [16, 20] },
      { prop: 'padding-bottom', sizes: [12, 16], bases: [16, 20] },
      { prop: 'padding-left', sizes: [12, 16], bases: [16, 20] },
      { prop: 'margin-bottom', sizes: [20, 36], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  height: 100%;

  border-radius: 16px;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    border: 2px solid ${colors.blueberry30};
    border-radius: 16px;

    opacity: 0;

    content: '';

    will-change: opacity;
  }
`;

export const groupedUpContainer = css`
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  ::after {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const groupedDownContainer = css`
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

  ::after {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const placeStyle = css`
  color: ${colors.blueberry20};
  font-weight: 800;
  font-size: 24px;
  font-family: ${fontFamilies.radioGrotesk};
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
  font-family: ${fontFamilies.radioGrotesk};

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
  --accentColor: ${colors.blueberry30}

  position: relative;

  display: block;

  width: 100%;
  height: 100%;
  max-height: 350px;

  text-decoration: none;

  outline: none;

  cursor: pointer;

  ${Container}::after {
    opacity: 1;
  }
`;
