import styled, { css } from 'styled-components';
import colors from '../../../../styles/colors';
import breakpointsRange from '../../../../utils/breakpointsRange';
import { lessThan } from '../../../../utils/mediaQuery';
import breakpoints from '../../../../styles/breakpoints';
// import selfBreakpoints from '../../shared/selfBreakpoints';
import Cover from '../../../LayoutSections/Cover';

// 576, 768, 1280
export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[6]];

export const Wrapper = styled(Cover)`
  padding-right: 15px;
  padding-left: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  ${breakpointsRange(
    [{ prop: 'maxHeight', sizes: [53, 60], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Link = styled.a`
  flex-grow: 1;

  background-color: ${colors.gris};

  :focus,
  :hover {
    background-color: ${colors.white};
    outline: 0;
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
  z-index: 1000;

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
