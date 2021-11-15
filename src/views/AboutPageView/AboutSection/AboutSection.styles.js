// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const SectionPicture = styled.img`
  max-width: 100%;

  border-radius: 12px;
`;

export const SectionTitle = styled.h2`
  color: ${colors.bleu80};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'marginTop', sizes: [24, 42], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 34], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
