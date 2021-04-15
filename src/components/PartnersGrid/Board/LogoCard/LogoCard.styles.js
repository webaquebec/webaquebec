// vendors
import styled, { css } from 'styled-components';

// components
import Cover from '../../../LayoutSections/Cover';

// utils
import breakpointsRange from '../../../../utils/breakpointsRange';
import { lessThan } from '../../../../utils/mediaQuery';

// styles
import colors from '../../../../styles/colors';
import breakpoints from '../../../../styles/breakpoints';

// 576, 768, 1280
export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[6]];

export const Wrapper = styled(Cover)`
  align-items: center;

  padding-right: 15px;
  padding-left: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  ${breakpointsRange(
    [
      { prop: 'maxHeight', sizes: [53, 60], bases: [16, 20] },
      { prop: 'maxWidth', sizes: [80, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  filter: invert(14%) sepia(100%) saturate(4664%) hue-rotate(221deg)
    brightness(61%) contrast(148%);
`;

export const Link = styled.a`
  flex-grow: 1;

  background-color: ${colors.gris};

  :focus,
  :hover {
    background-color: ${colors.white};
    outline: 0;

    img {
      filter: none;
    }
  }
`;

export const topPositionStyle = css`
  top: ${({ $offsetY, $borderWidth }) => $offsetY || `${$borderWidth * -1}px`};
`;
export const rightPositionStyle = css`
  right: ${({ $offsetX, $borderWidth }) =>
    $offsetX || `${$borderWidth * -1}px`};
`;
export const bottomPositionStyle = css`
  bottom: ${({ $offsetY, $borderWidth }) =>
    $offsetY || `${$borderWidth * -1}px`};
`;
export const leftPositionStyle = css`
  left: ${({ $offsetX, $borderWidth }) => $offsetX || `${$borderWidth * -1}px`};
`;

export const Container = styled.div`
  position: absolute;
  z-index: 100;

  ${({ $verticalPosition }) => $verticalPosition === 'top' && topPositionStyle};

  ${({ $horizontalPosition }) =>
    $horizontalPosition === 'right' && rightPositionStyle};

  ${({ $verticalPosition }) =>
    $verticalPosition === 'bottom' && bottomPositionStyle};

  ${({ $horizontalPosition }) =>
    $horizontalPosition === 'left' && leftPositionStyle};

  display: flex;

  min-width: 164px;
  min-height: 164px;

  border: ${({ $borderWidth }) => $borderWidth}px solid;

  ${lessThan(selfBreakpoints[1])} {
    --max-container-width: ${360 - 2 * 16}px;

    min-width: calc(
      (
          (
              var(--max-container-width) + 2 *
                ${({ $borderWidth }) => $borderWidth}px
            ) / 6
        ) * 2
    );
    min-height: calc(
      (
          (
              var(--max-container-width) + 2 *
                ${({ $borderWidth }) => $borderWidth}px
            ) / 6
        ) * 2
    );

    ${Wrapper} {
      min-height: 100%;
    }
  }
`;
