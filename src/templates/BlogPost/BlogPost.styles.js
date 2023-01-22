// vendors
import styled, { css } from 'styled-components';

// components
import SectionContainer from '../../components/SectionContainer';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';

export const backArrowStyle = css`
  transform: rotate(180deg);
`;

export const spaceStyle = css`
  ${breakpointsRange(
    [{ prop: '--space', sizes: [40, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [24, 100], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 114], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::before,
  ::after {
    height: 30vh;
  }

  ::before {
    top: -30vh;
  }

  ::after {
    bottom: -30vh;
  }
`;
