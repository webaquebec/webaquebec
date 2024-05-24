// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan, lessThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';

export const SwitcherWrapper = styled.div`
  display: flex;
  gap: 2rem 4rem;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [60, 90], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 90], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ${lessThan(768)} {
    flex-wrap: wrap;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const PictureWrapper = styled.div`
  ${greaterThan(768)} {
    width: 50%;
  }

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
  color: ${colors.gris100};

  ${greaterThan(768)} {
    width: 50%;
  }

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
