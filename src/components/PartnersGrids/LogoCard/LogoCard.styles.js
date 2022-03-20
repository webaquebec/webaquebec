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

  & > div {
    filter: none;
  }

  img {
    filter: brightness(0) invert(1);
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 60%;

  filter: invert(11%) sepia(85%) saturate(5178%) hue-rotate(238deg)
    brightness(71%) contrast(126%);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;

  filter: brightness(0);
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

    & > div {
      filter: none;
    }

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
`;
