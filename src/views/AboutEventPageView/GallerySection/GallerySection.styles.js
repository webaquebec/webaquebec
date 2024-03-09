// vendors
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// utils
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const GalleryContainer = styled.section`
  position: relative;

  background: linear-gradient(
    ${colors.blueberry} 0,
    ${colors.blueberry} 70%,
    rgba(255, 255, 255, 0) 100%
  );

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 120], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [48, 120], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [130, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GalleryTitle = styled.h4`
  margin-top: 0;

  color: ${colors.white};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GalleryText = styled.div`
  color: ${colors.white};
  text-align: center;
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 120], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const GalleryItem = styled.button`
  width: 100%;
  min-width: 232px;

  padding: 0;

  overflow: hidden;

  border: 4px solid ${colors.white};
  border-radius: 12px;

  opacity: 0.8;

  ${breakpointsRange(
    [{ prop: 'margin', sizes: [4, 8], bases: [16, 20] }],
    breakpoints.spacings
  )};

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const GalleryPicture = styled(GatsbyImage)`
  ${breakpointsRange(
    [{ prop: 'maxHeight', sizes: [155, 248], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(2560)} {
    max-height: 10vw;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;

  ${breakpointsRange(
    [
      { prop: 'top', sizes: [24, 40], bases: [16, 20] },
      { prop: 'right', sizes: [24, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GalleryOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const ActiveMedia = styled(GatsbyImage)`
  position: absolute;
  top: 50%;
  left: 50%;

  max-width: 1200px;
  max-height: 80%;

  transform: translate(-50%, -50%);
`;
