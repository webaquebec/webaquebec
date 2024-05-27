// vendors
import styled, { css } from 'styled-components';

// styles
import { speed } from '../../../styles/animation';
import colors from '../../../styles/colors';

export const Lines = styled.div`
  position: relative;

  display: block;

  width: 100%;
  height: 100%;
`;

export const Line = styled.span`
  position: absolute;
  left: 0;

  display: block;

  width: var(--width-icon);
  height: var(--height-line);

  background: ${colors.blueberry10};
  border-radius: 50px;

  will-change: tranform;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${speed.default}, opacity ${speed.default};
  }

  :nth-child(1) {
    top: 0;
  }

  :nth-child(2) {
    top: 50%;
  }

  :nth-child(3) {
    top: 100%;
  }
`;

export const activeStyle = css`
  && ${Lines} > span {
    &:nth-child(1) {
      transform: translateY(var(--translate-Y)) translateX(var(--translate-X))
        rotate(var(--rotation));
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(calc(var(--translate-Y) * -1))
        translateX(var(--translate-X)) rotate(calc(var(--rotation) * -1));
    }
  }
`;

export const Button = styled.button`
  --width-icon: 32px;
  --height-icon: 32px;
  --height-line: 3px;
  --rotation: 45deg;
  --translate-X: 0;
  --translate-Y: calc((var(--height-icon) - 12px) / 2);

  position: relative;
  z-index: 1051;

  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--width-icon);
  height: var(--height-icon);
  padding: 6px 0;

  border: 0;

  cursor: pointer;

  appearance: none;

  :hover ${Lines} > span,
  :focus-visible ${Lines} > span {
    &:nth-child(1) {
      transform: translateY(calc(var(--height-line) / 1.2 * -1));
    }

    &:nth-child(3) {
      transform: translateY(calc(var(--height-line) / 1.2));
    }
  }

  ${({ $active }) => $active && activeStyle}
`;
