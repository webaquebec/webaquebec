// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';

// components
import Center from '../../../components/LayoutSections/Center';

export const Title = styled.h2`
  color: ${colors.bleu90};
  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [26, 48], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [20, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Container = styled(Center)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [100, 160], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [180, 200], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
