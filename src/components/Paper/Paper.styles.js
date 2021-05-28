// vendors
import styled, { css } from 'styled-components';

// components
import Box from '../LayoutSections/Box';

const roundedStyle = css`
  border-radius: 16px;
`;

const overlaidStyle = css`
  background-color: transparent;

  ::before {
    background-color: ${({ lightColor, darkColor, invert }) =>
      invert ? darkColor : lightColor};

    mix-blend-mode: overlay;
  }
`;

const Container = styled(Box)`
  position: relative;

  ::before {
    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;

    width: 100%;
    height: 100%;

    border-radius: inherit;

    /* FIXME: This is hell. Find another way if a drop-shadow is required. */

    /* filter: drop-shadow(0 30px 80px rgba(0, 12, 158, 0.5)); */

    mix-blend-mode: normal;

    content: '';
  }

  ${({ $rounded }) => $rounded && roundedStyle};

  ${({ $overlaid }) => $overlaid && overlaidStyle};
`;

export default Container;
