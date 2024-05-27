// vendors
import styled from 'styled-components';

// utils
import GatsbyImage from 'gatsby-image';
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
  width: 100%;
  max-width: 500px;

  ${greaterThan(768)} {
    width: 50%;
  }

  img {
    ${breakpointsRange(
      [{ prop: 'borderRadius', sizes: [5, 12], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const Image = styled(GatsbyImage)`
  width: 50%;

  ${breakpointsRange(
    [{ prop: 'borderRadius', sizes: [5, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
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
