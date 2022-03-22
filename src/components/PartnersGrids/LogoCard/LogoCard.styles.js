// vendors
import styled, { css } from 'styled-components';
import colors from '../../../styles/colors';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';

export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[7]];

export const premiumStyle = css`
  background-color: ${colors.bleu80};

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
  max-width: 100%;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [300, 300], bases: [16, 20] },
      { prop: 'height', sizes: [300, 300], bases: [16, 20] },
    ],
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

  filter: invert(14%) sepia(100%) saturate(4664%) hue-rotate(221deg)
    brightness(61%) contrast(148%);
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.bleu80};

  background-color: ${colors.gris30};
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
