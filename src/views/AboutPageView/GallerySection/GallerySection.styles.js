// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const GalleryContainer = styled.div`
  background-color: ${colors.bleu80};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [48, 120], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [48, 120], bases: [16, 20] },
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
`;
