// vendors
import styled, { css } from 'styled-components';

// utils
import { lessThan } from '../../utils/mediaQuery';

// images
import IconPlus from '../../images/IconPlus';

// styles
import colors from '../../styles/colors';
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

const buttonDarkStyle = css`
  color: ${colors.blueberry};
`;

export const Button = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [24, 24] },
      { prop: 'height', sizes: [24, 24] },
    ],
    breakpoints.spacings
  )};

  margin: 0;
  padding: 0;

  color: ${colors.white};

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

    ${lessThan(breakpoints[3])} {
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

    ${lessThan(breakpoints[3])} {
      display: none;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  :hover span,
  :focus span {
    transform: translateX(-75px);
    opacity: 1;
  }

  svg {
    ${breakpointsRange(
      [
        { prop: 'width', sizes: [36, 42] },
        { prop: 'height', sizes: [36, 42] },
      ],
      breakpoints.spacings
    )};
  }

  ${({ $darked }) => $darked && buttonDarkStyle};
`;

export const IconCross = styled(IconPlus)`
  transform: rotate(45deg);
`;
