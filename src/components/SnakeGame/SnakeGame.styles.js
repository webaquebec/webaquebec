import styled, { keyframes } from 'styled-components';
import { fontFamilies, fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';
import { unstyledListStyle } from '../../styles/global';

export const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;

export const flicker = keyframes`
  0% {
    opacity: 0.2786;
  }

  5% {
    opacity: 0.3477;
  }

  10% {
    opacity: 0.2360;
  }

  15% {
    opacity: 0.9063;
  }

  20% {
    opacity: 0.1813;
  }

  25% {
    opacity: 0.8389;
  }

  30% {
    opacity: 0.6558;
  }

  35% {
    opacity: 0.6780;
  }

  40% {
    opacity: 0.2656;
  }

  45% {
    opacity: 0.8469;
  }

  50% {
    opacity: 0.9602;
  }

  55% {
    opacity: 0.0859;
  }

  60% {
    opacity: 0.2031;
  }

  65% {
    opacity: 0.7199;
  }

  70% {
    opacity: 0.5345;
  }

  75% {
    opacity: 0.3729;
  }

  80% {
    opacity: 0.7143;
  }

  85% {
    opacity: 0.7042;
  }

  90% {
    opacity: 0.7003;
  }

  95% {
    opacity: 0.3611;
  }

  100% {
    opacity: 0.2439;
  }
`;

export const textShadow = keyframes`
  0% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  5% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  10% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  15% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  20% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  25% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  30% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  35% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  40% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  45% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  50% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  55% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  60% {
     /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  65% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  70% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  75% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  80% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  85% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  90% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  95% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }

  100% {
    /* stylelint-disable-next-line number-max-precision */
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
`;

export const glow = keyframes`
  0% {
    text-shadow: 0 0 4px var(--glow-color);
  }

  50% {
    text-shadow: 0 0 8px var(--glow-color);
  }

  100% {
    text-shadow: 0 0 4px var(--glow-color);
  }
`;

export const Container = styled.div`
  --glow-color: ${colors.blush};

  position: relative;

  overflow: auto;

  background-color: ${({ $bgColor }) => $bgColor};
`;

export const CRTScreenEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  width: 100%;
  height: 100%;

  transform: translate(-50%, -50%);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${textShadow} 1.6s infinite;
  }

  pointer-events: none;

  ::before {
    position: absolute;
    inset: 0;

    z-index: 2;

    display: block;

    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );

    background-size: 100% 2px, 3px 100%;

    content: ' ';
    pointer-events: none;
  }

  ::after {
    position: absolute;
    inset: 0;

    z-index: 2;

    display: block;

    background: rgba(18, 16, 16, 0.1);
    opacity: 0;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${flicker} 0.15s infinite;
    }

    content: ' ';
    pointer-events: none;
  }
`;

export const Canvas = styled.canvas``;

export const ScoringContainer = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;

  transform: translate(-178px, -50%) translateX(-100%);
`;

export const Score = styled.div`
  font-weight: ${fontWeights.regular};
  font-size: 1rem;
  font-family: ${fontFamilies.pressStart2P};
  letter-spacing: 1.3px;
  text-align: right;
  text-transform: uppercase;
`;

export const ScoreTitle = styled.div`
  --glow-color: ${colors.mauve};

  color: ${`hsl(${colors.mauve80hsl.hue}, 52%, 73%)`};
  font-size: 0.35em;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${glow} 1s linear infinite;
  }
`;
export const ScoreValue = styled.div`
  color: ${colors.peach};
  font-size: 0.5em;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${glow} 1s linear infinite;
  }
`;

export const ControlKeys = styled.div``;

export const MenuInstructionsContainer = styled.div`
  position: absolute;
  inset: 0;
`;

export const MenuContainer = styled.div``;

export const MenuList = styled.ul`
  ${unstyledListStyle};

  width: max-content;
  margin: 0 auto;

  font-weight: ${fontWeights.regular};
  font-size: 0.8rem;
  font-family: ${fontFamilies.pressStart2P};

  /* animation: ${glow} 2s linear infinite; */

  > li + li {
    margin-top: 16px;
  }
`;

export const Menu = styled.div`
  ${unstyledListStyle};

  width: max-content;
  margin: 0 auto;

  font-weight: ${fontWeights.regular};
  font-size: 0.8rem;
  font-family: ${fontFamilies.pressStart2P};

  /* animation: ${glow} 2s linear infinite; */

  > * + * {
    margin-top: 16px;
  }
`;

export const MenuItem = styled.li``;

export const MenuButton = styled.button`
  position: relative;

  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0;
  padding: 0;

  color: ${colors.peach};

  text-shadow: 0 0 8px ${colors.blush};

  border: 0;
  cursor: pointer;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${glow} 2s linear infinite;
  }

  appearance: none;

  :focus,
  :hover {
    outline: 0;
    opacity: 1;
  }

  :focus::before,
  :hover::before,
  :active::before {
    position: absolute;
    top: -2px;
    left: -25px;

    content: '▶';
  }
`;
export const MenuLabel = styled.label`
  position: relative;

  display: flex;
  gap: 10px;
  align-items: center;

  padding: 0;

  text-shadow: 0 0 8px ${colors.blush};

  border: 0;
  cursor: pointer;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${glow} 2s linear infinite;
  }

  /*
  input:checked + span::before {
    position: absolute;
    top: -2px;
    left: -25px;

    content: '▶';
  } */
`;

export const PlayInstructions = styled.div`
  color: ${colors.white};
  font-weight: ${fontWeights.regular};
  font-size: 0.55rem;
  font-family: ${fontFamilies.pressStart2P};
  letter-spacing: 1px;
  text-align: center;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${glow} 1s linear infinite, ${blinker} 1s step-end infinite;
  }
`;

export const GameOver = styled.div`
  color: ${colors.peach};
  font-weight: ${fontWeights.regular};
  font-size: 1.4rem;
  font-family: ${fontFamilies.pressStart2P};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${glow} 1.4s linear infinite;
  }
`;
