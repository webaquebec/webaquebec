// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';
import { speed } from '../../styles/animation';

export const ContactTitle = styled.h2`
  margin: 0;
  margin-bottom: 16px;

  font-weight: ${fontWeights.medium};
  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [18, 24], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const ContactText = styled.p`
  margin-bottom: 30px;

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [14, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const MediaText = css`
  color: ${colors.gris90};
`;

export const MediaList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto 0 0;
  padding: 0;

  list-style: none;
`;

export const SocialIcon = styled.img`
  ${breakpointsRange(
    [{ prop: 'width', sizes: [24, 30] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const blockContainerStyle = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [56, 80] },
      { prop: 'paddingRight', sizes: [32, 80] },
      { prop: 'paddingBottom', sizes: [56, 80] },
      { prop: 'paddingLeft', sizes: [32, 80] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const ContentContainer = css`
  height: 100%;
`;

export const GameWrapper = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  font-size: 4em;

  border-radius: inherit;
`;

export const gameContainerStyle = css`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  border-radius: inherit;
`;

export const SnakyButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 3rem;
  height: 3rem;
  margin: 0;
  padding: 0;

  font-size: 2rem;
  line-height: 1;

  background-color: ${`hsl(
    ${colors.mauve80hsl.hue},
    ${colors.mauve80hsl.saturation}%,
    15%
  )`};
  border: 0;
  border-bottom-right-radius: 16px;

  cursor: pointer;

  appearance: none;

  ::before {
    position: absolute;
    inset: 0;

    z-index: 2;

    background: ${`radial-gradient(
      transparent 30%,
      ${colors.blueberry100} 55%)`};

    border-radius: inherit;

    content: '';
  }

  ::after {
    position: absolute;
    inset: 0;

    background-color: ${colors.blueberry100};
    border-radius: inherit;
    opacity: var(--opacity);

    transition: opacity ${speed.superslow} ease-out;

    content: '';
  }

  @media screen and (prefers-reduced-motion: reduce) {
    ::after {
      transition: none;
    }
  }

  > span:last-child {
    filter: brightness(0.5) invert(0) sepia(0.72) hue-rotate(201deg) saturate(9);
  }
`;
