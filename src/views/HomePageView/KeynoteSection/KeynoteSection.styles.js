// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies } from '../../../styles/typography';

export const wrapper = css`
  position: relative;

  overflow: visible;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [144, 280], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  margin: 0;

  font-family: ${fontFamilies.redaction35};
  text-align: center;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Intro = styled.p`
  margin: 0;

  text-align: center;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [65, 120], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${greaterThan(660)} {
    justify-content: space-around;
  }

  ${greaterThan(1280)} {
    justify-content: space-between;
  }
`;
