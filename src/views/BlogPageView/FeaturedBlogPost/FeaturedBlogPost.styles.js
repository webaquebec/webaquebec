// vendors
import styled, { css } from 'styled-components';

// utils
import { em } from 'polished';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const PostWrapper = css`
  @media (min-width: ${em(992)}) {
    transform: rotate3d(0, 0, 1, -1.12deg);
  }

  ${breakpointsRange(
    [
      { prop: 'padding', sizes: [16, 32], bases: [16, 20] },
      { prop: 'marginTop', sizes: [-150, -50], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 50], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${em(865)}) {
    margin-top: 8px;
    margin-bottom: 32px;
  }
`;

export const PostPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostPicture = styled.img`
  max-width: 100%;
`;

export const PostTitle = styled.h2`
  margin: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [20, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StarDecoration = styled.img`
  margin-right: 8px;
`;

export const PostDate = styled.p`
  color: ${colors.jaune90};

  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'marginTop', sizes: [12, 28], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [12, 28], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PostSummary = styled.p`
  margin-top: 0;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [12, 28], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
