// vendors
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';
import { pictureFilter } from '../../../styles/global';
import colors from '../../../styles/colors';

// images
import VectorStar from '../../../images/VectorStar';

export const postWrapperStyle = css`
  ${breakpointsRange(
    [
      { prop: 'padding', sizes: [16, 32], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 50], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Content = styled.div`
  > * + * {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [12, 28], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const Picture = styled(Img)`
  ${pictureFilter}

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
      { prop: 'lineHeight', sizes: [18, 24], bases: [16, 20], unit: '' },
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
  color: ${colors.watermelon};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Excerpt = styled.div`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
