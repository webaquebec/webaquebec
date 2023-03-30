// vendors
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';

const paddedStyle = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 138], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [98, 138], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const fadedStyle = css`
  ::before,
  ::after {
    position: absolute;
    right: 0;
    left: 0;
    z-index: -1;

    display: block;

    width: 100%;
    height: 50vh;

    background: ${({ $bgColor }) => $bgColor};

    content: '';

    pointer-events: none;
  }

  ::before {
    /** FIXME: Temporary fix due to a weird gap issue on mobile display.
     *  Find a better way to fix it.
     **/
    top: -49.999vh;

    background: ${({ $bgColor }) =>
      $bgColor &&
      `linear-gradient(
        -180deg,
        ${transparentize(1, $bgColor)},
        ${transparentize(0.9, $bgColor)} 10%,
        ${transparentize(0.1, $bgColor)} 85%,
        ${$bgColor}
      );`};
  }

  ::after {
    bottom: -50vh;

    background: ${({ $bgColor }) =>
      $bgColor &&
      `linear-gradient(
        0deg,
        ${transparentize(1, $bgColor)},
        ${transparentize(0.9, $bgColor)} 10%,
        ${transparentize(0.1, $bgColor)} 85%,
        ${$bgColor}
      );`};
  }
`;

const StyledSection = styled.section`
  position: relative;

  background-color: ${({ $bgColor }) => $bgColor};

  ${({ $padded }) => $padded && paddedStyle}

  ${({ $faded }) => $faded && fadedStyle};
`;

export default StyledSection;
