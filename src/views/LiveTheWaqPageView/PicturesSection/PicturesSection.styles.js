// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// components
import Switcher from '../../../components/LayoutSections/Switcher';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';

export const SwitcherWrapper = styled(Switcher)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [60, 90], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 90], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  &:nth-child(even) {
    > div {
      flex-direction: row-reverse;
    }
  }
`;

export const PictureWrapper = styled.div`
  width: 50%;

  img {
    max-width: 100%;
    max-height: 400px;

    ${greaterThan(768)} {
      height: 100%;
      object-fit: cover;
    }

    ${breakpointsRange(
      [{ prop: 'borderRadius', sizes: [5, 12], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const TextWrapper = styled.div`
  width: 50%;

  color: ${colors.gris100};

  h2 {
    ${breakpointsRange(
      [{ prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  p {
    ${breakpointsRange(
      [{ prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  ul {
    ${breakpointsRange(
      [{ prop: 'marginLeft', sizes: [16, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;
