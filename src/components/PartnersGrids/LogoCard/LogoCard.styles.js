// vendors
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import breakpoints from '../../../styles/breakpoints';

export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[7]];

export const premiumStyle = css`
  background-color: ${colors.bleu90};

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [130, 216], bases: [16, 20] },
      { prop: 'height', sizes: [130, 216], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  img {
    filter: brightness(0) invert(1);
  }
`;

export const presentingStyle = css`
  width: 100%;
  max-width: 384px;
  margin: 0 auto;

  ${greaterThan(768)} {
    width: 384px;
  }

  ${greaterThan(815)} {
    margin: 0 0 0 auto;
  }

  ${breakpointsRange(
    [{ prop: 'height', sizes: [160, 384], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: auto;
  max-height: 60%;

  /* filter: invert(14%) sepia(100%) saturate(4664%) hue-rotate(211deg)
    brightness(61%) contrast(148%); */

  /* filter: invert(12%) sepia(100%) saturate(4664%) hue-rotate(222deg)
    brightness(62%) contrast(148%); */

  filter: invert(12%) sepia(100%) saturate(8664%) hue-rotate(222deg)
    brightness(64%) contrast(148%);

  /* Fallback on Safari 11+ only. Webkit seems to handle css filter differently. */
  @media (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      filter: contrast(0%) sepia(14%) invert(13%) saturate(8464%)
        hue-rotate(197deg) brightness(35%);
    }
  }

  will-change: filter;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.bleu80};

  /* background-color: ${colors.gris30}; */
  border: 2px solid;
  border-radius: 16px;

  :focus,
  :hover {
    background-color: ${colors.white};
    outline: 0;

    img {
      filter: none;
    }
  }

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [100, 160], bases: [16, 20] },
      { prop: 'height', sizes: [100, 160], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ${({ $isPremium }) => $isPremium && premiumStyle};
  ${({ $isPresenting }) => $isPresenting && presentingStyle};
`;
