// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';
import { speed } from '../../../styles/animation';

export const toggleTipStyle = css`
  top: 15px;
  right: 15px;

  z-index: 2;

  > span {
    right: 135%;
    left: unset;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${speed.fast};
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  padding: 1rem 0;

  pointer-events: none;
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  /* ::before {
    position: absolute;
    inset: 0;
    background: ${`hsl(
      ${colors.mauve80hsl.hue},
      ${colors.mauve80hsl.saturation}%,
      8%
    )`};
    mask-image: linear-gradient(to top, #000, transparent);
    content: '';
    z-index: -1;
  } */
`;

export const Button = styled.button`
  --shadow-color: ${colors.mauve80hsl.hue} ${colors.mauve80hsl.hue}% 10%;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  margin: 0;
  padding: 0;

  font-size: 0.875rem;

  background-color: ${colors.white};
  border: 0;
  border-radius: 50px;
  box-shadow: ${elevation.medium};

  cursor: pointer;

  opacity: 0.8;

  appearance: none;
  pointer-events: auto;
`;

export const ButtonWrapper = styled.span`
  height: auto;

  line-height: 1.2;
`;
