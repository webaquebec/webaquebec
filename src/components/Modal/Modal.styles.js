import styled, { css } from 'styled-components';
import ReactModalAdapter from './ReactModalAdapter';

import IconPlus from '../../images/IconPlus';

import colors from '../../styles/colors';
import zIndices from '../../styles/zIndexes';

import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';
import breakpoints from '../../styles/breakpoints';
import { speed } from '../../styles/animation';

export const Wrapper = styled.div``;

export const IconCross = styled(IconPlus)`
  color: ${colors.blueberry};

  transform: rotate(45deg);
`;

export const ActionButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [24, 32] },
      { prop: 'height', sizes: [24, 32] },
    ],
    breakpoints.spacings
  )};

  margin: 0;
  padding: 0;

  color: ${colors.blueberry};
  line-height: 0;

  background: none;

  border: 0;
  cursor: pointer;

  appearance: none;

  :focus {
    outline: 0;
  }

  ::before {
    position: absolute;

    width: calc(100% + 20px);
    height: calc(100% + 20px);

    border: 3px solid;
    border-radius: 50%;
    transform: scale(1.5);

    cursor: default;

    opacity: 0;

    transition: transform ${speed.fast}, opacity ${speed.fast};

    content: '';

    will-change: transform, opacity;

    ${lessThan(breakpoints.spacings[1])} {
      display: none;
    }
  }

  :focus::before {
    transform: scale(1);

    opacity: 1;
  }

  span {
    position: absolute;

    word-break: keep-all;

    transform: translateX(-48px);
    opacity: 0;

    transition: transform ${speed.fast}, opacity ${speed.fast};
    transition-delay: ${speed.fast};

    will-change: transform, opacity;

    ${lessThan(breakpoints.spacings[2])} {
      display: none;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  :hover span,
  :focus span {
    transform: translateX(-70px);
    opacity: 1;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const outlineStyle = css`
  outline: 0.125rem solid transparent;
  outline-offset: -0.125rem;
`;

export const invertStyle = css`
  color: ${({ lightColor }) => lightColor};

  background-color: ${({ darkColor }) => darkColor};
`;

export const roundStyle = css`
  border-radius: 16px;
`;

export const fullScreenStyle = css`
  width: 100vw;
  height: 100%;
`;

export const noTransitionStyle = css`
  .Overlay,
  .Content {
    transition: none;
  }
`;

export const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Content',
  bodyOpenClassName: 'Modal--open',
})`
  .Overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: ${zIndices.popover};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    max-height: 100vh;

    &::before {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      overflow: hidden;

      background-color: rgba(0, 0, 0, 0.6);

      opacity: 0;

      @media screen and (prefers-reduced-motion: no-preference) {
        transition: opacity ${speed.default};
      }

      content: '';

      will-change: opacity;
    }

    &[class*='--after-open']::before {
      opacity: 1;
    }

    &[class*='--before-close']::before {
      opacity: 0;
    }
  }

  .Content {
    position: relative;

    padding: ${({ $padding }) => $padding};

    /* overflow-x: hidden;
    overflow-y: auto; */

    color: ${({ $color }) => $color};

    background-color: ${({ $bgColor }) => $bgColor};
    border: ${({ $noBorder, $borderWidth }) =>
      !$noBorder && `${$borderWidth} solid`};

    transform: translate3d(0, 100%, 0);

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: transform ${speed.fast};
    }

    will-change: transform;

    &[class*='--after-open'] {
      transform: translate3d(0, 0, 0);
    }

    &[class*='--before-close'] {
      transform: translate3d(0, 100%, 0);
    }

    ${({ $fullScreen }) => $fullScreen && fullScreenStyle};

    ${({ $invert }) => $invert && invertStyle};

    /* Apply a transparent outline in the absence of a border
    to restore the box shape on high contrast themes */
    ${({ $noBorder }) => $noBorder && outlineStyle}

    ${({ $round }) => $round && roundStyle};

    :focus {
      outline: 0;
    }
  }

  ${({ $noTransition }) => $noTransition && noTransitionStyle}

  @media screen and (prefers-reduced-motion: reduce) {
    ${noTransitionStyle}
  }
`;
