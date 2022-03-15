// vendors
import styled, { css, keyframes } from 'styled-components';
import { em } from 'polished';

// images
import Sticker21 from '../../images/stickers/Sticker21';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';

// styles
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';

export const FooterWrapper = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [56, 94], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const FooterTitle = styled.h2`
  margin-top: 0;

  color: ${colors.bleu90};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ContactLink = styled.a`
  display: block;

  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  word-break: normal;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [20, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const LogoWrapper = styled.div`
  align-self: center;

  text-align: center;

  @media (max-width: ${em(846)}) {
    order: -1;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 32px;
`;

export const ArchivesBlock = styled.div`
  color: ${colors.gris90};
`;

export const ArchivesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -40px;
  padding: 0;

  list-style: none;

  ${breakpointsRange(
    [{ prop: 'marginRight', sizes: [0, -40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ArchiveItem = styled.li`
  margin-right: 40px;
`;

export const ArchiveLink = styled.a`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [12, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [24, 32], bases: [16, 20], unit: '' }],
    breakpoints.spacings
  )};
`;

export const StyledFooter = styled.footer`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [60, 134], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [60, 96], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const StickerWrapper = styled.div`
  position: absolute;
  top: -${350 / 2 - 5}px;
  left: -${350 / 2 + 30}px;

  width: 350px;
  height: auto;

  ${lessThan(breakpoints.spacings[2])} {
    top: -${250 / 2 + 50}px;
    left: -${250 / 2 - 50}px;

    width: 290px;
  }

  ${lessThan(breakpoints.spacings[1])} {
    top: -${250 / 2 + 40}px;
    left: -${250 / 2 - 60}px;

    width: 250px;
  }
`;

const template = (i) => `
  &:nth-child(${i}) {
    animation-delay: ${i * 30}ms;
  }
`;

const setAnimationDelays = () => {
  let str = '';
  for (let index = 0; index <= 69; index += 1) {
    str += template(index);
  }
  return str;
};

const moving = keyframes`
  from {
    transform: translate3d(10px, 0, 0) rotate3d(0, 0, 1, -40deg);
  }

  to {
    transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Sticker = styled(Sticker21)`
  .pog {
    transform-origin: center;
    transform-box: fill-box;

    animation: ${moving} 500ms cubic-bezier(0.64, 0.57, 0.67, 1.53),
      ${appear} 0s;
    animation-play-state: var(--playState, paused);
    animation-fill-mode: both;

    will-change: opacity, transform;

    ${setAnimationDelays()};

    @media (prefers-reduced-motion: reduce) {
      animation-name: none;
    }
  }
`;
