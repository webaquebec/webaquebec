// vendors
import styled from 'styled-components';

// components
import StyledSectionContainer from '../../../components/SectionContainer';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { magnifyStyle } from '../../../styles/global';
import breakpoints from '../../../styles/breakpoints';

export const SectionContainer = styled(StyledSectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [186, 105], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.p`
  ${magnifyStyle};

  max-width: 587px;
  margin-top: 0;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [31, 47], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
