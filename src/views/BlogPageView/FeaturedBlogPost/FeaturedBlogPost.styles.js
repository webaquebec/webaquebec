// vendors
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

// utils
import { em } from 'polished';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

// images
import VectorStar from '../../../images/VectorStar';

export const postWrapperStyle = css`
  ${breakpointsRange(
    [
      { prop: 'padding', sizes: [16, 32], bases: [16, 20] },
      { prop: 'marginTop', sizes: [-150, -50], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 50], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  @media (min-width: ${em(992)}) {
    transform: rotate(-1.12deg);
  }
`;

export const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${em(865)}) {
    margin-top: 8px;
    margin-bottom: 32px;
  } */

  > * + * {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [12, 28], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const Picture = styled(Img)`
  /* max-width: 100%; */
  ${breakpointsRange(
    [{ prop: 'minHeight', sizes: [214, 434], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [0, 40], bases: [16, 20] },
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Star = styled(VectorStar)`
  margin-right: 8px;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [16, 16], bases: [16, 20] },
      { prop: 'height', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Date = styled.p`
  color: ${colors.jaune80};

  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      // { prop: 'marginTop', sizes: [12, 28], bases: [16, 20] },
      // { prop: 'marginBottom', sizes: [12, 28], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Excerpt = styled.div`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      // { prop: 'marginBottom', sizes: [12, 28], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
