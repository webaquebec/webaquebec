// vendors
import styled, { css, keyframes } from 'styled-components';

// images
import Sticker22 from '../../images/stickers/Sticker22';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';

// styles
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';

export const footerWrapperStyle = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [56, 94], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const footerTextStyle = css`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 14px;

  color: ${colors.bleu90};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Block = styled.div`
  ${footerTextStyle}
`;

export const Link = styled.a`
  /* display: block; */

  /* color: ${colors.bleu80};
  font-weight: ${fontWeights.medium}; */
  text-decoration: none;

  word-break: normal;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 117px;
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

  :hover,
  :focus {
    text-decoration: underline;
  }
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
  top: -${366 / 2 - 30}px;
  left: -${366 / 2 - 17}px;

  width: 366px;
  height: auto;

  ${lessThan(breakpoints.spacings[2])} {
    top: -${290 / 2 + 3}px;
    left: -${290 / 2 - 89}px;

    width: 290px;
  }

  ${lessThan(breakpoints.spacings[1])} {
    top: -${250 / 2 + 9}px;
    left: -${250 / 2 - 83}px;

    width: 250px;
  }
`;

const template = (i) => `
  &:nth-child(${i}) {
    animation-delay: ${i * 20}ms;
  }
`;

const setAnimationDelays = () => {
  let str = '';
  for (let index = 0; index <= 80; index += 1) {
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

export const Sticker = styled(Sticker22)`
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
