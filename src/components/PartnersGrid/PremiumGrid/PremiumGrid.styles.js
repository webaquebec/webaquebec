// vendors
import styled from 'styled-components';

// utils
import { lessThan } from '../../../utils/mediaQuery';

// styles
import breakpoints from '../../../styles/breakpoints';

// 576, 768, 1280
export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[7]];

export const Container = styled.div`
  position: absolute;
  top: -55px;

  ${lessThan(768)} {
    top: -35px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-gap: 30px;
  grid-template-rows: repeat(3, 218px);
  grid-template-columns: repeat(5, 218px);

  ${lessThan(selfBreakpoints[2])} {
    grid-gap: 34px;
    grid-template-rows: repeat(3, 218px);
    grid-template-columns: repeat(3, 218px);
  }

  ${lessThan(selfBreakpoints[1])} {
    grid-row-gap: 5px;
    grid-column-gap: 34px;
    grid-template-rows: repeat(5, 155px);
    grid-template-columns: repeat(2, 130px);
  }
`;
