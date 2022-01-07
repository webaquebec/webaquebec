// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const GalleryContent = styled.div`
  position: relative;

  background: linear-gradient(
    ${colors.bleu80} 0,
    ${colors.bleu80} 70%,
    rgba(255, 255, 255, 0) 100%
  );

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 120], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [48, 120], bases: [16, 20] },
      { prop: 'marginTop', sizes: [-196, -182], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [130, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GalleryTitle = styled.h2`
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
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 120], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const GalleryItem = styled.button`
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

export const GalleryPicture = styled.img`
  ${breakpointsRange(
    [{ prop: 'maxHeight', sizes: [155, 248], bases: [16, 20] }],
    breakpoints.spacings
  )};
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

export const ActiveMedia = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  max-width: 90%;
  max-height: 80%;

  transform: translate(-50%, -50%);
`;
