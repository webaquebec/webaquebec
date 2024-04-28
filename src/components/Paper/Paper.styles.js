// vendors
import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

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

    mix-blend-mode: hard-light;
  }
`;

const elevationStyle = css`
  --shadow-color: ${colors.blueberry80hsl.hue}deg
    ${colors.blueberry80hsl.saturation}% ${colors.blueberry80hsl.lightness}%;

  box-shadow: ${({ $elevation }) => $elevation};
`;

const outlinedStyle = css`
  border: 2px solid ${colors.blueberry};
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

    mix-blend-mode: normal;

    content: '';
  }

  ${({ $rounded }) => $rounded && roundedStyle};

  ${({ $overlaid }) => $overlaid && overlaidStyle};

  ${({ $elevation }) => $elevation && elevationStyle};

  ${({ $outlined }) => $outlined && outlinedStyle};
`;

export default Container;
