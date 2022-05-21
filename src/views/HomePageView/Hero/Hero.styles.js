// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// components
import Button from '../../../components/Button';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontFamilies, fontWeights } from '../../../styles/typography';

export const linkStyleHover = css`
  :hover,
  :focus {
    text-decoration: none;
  }
`;

export const StyledHero = styled.header`
  position: relative;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [86, 130], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [128, 173], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const MarqueeWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const Dates = styled.p`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  white-space: nowrap;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [32, 94], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [32, 94], bases: [16, 20] },
      { prop: 'fontSize', sizes: [64, 164], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const StarSeparator = styled.img`
  ${breakpointsRange(
    [
      { prop: 'marginLeft', sizes: [12, 64], bases: [16, 20] },
      { prop: 'marginRight', sizes: [12, 64], bases: [16, 20] },
      { prop: 'width', sizes: [24, 50], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const MapPin = styled.img`
  ${breakpointsRange(
    [{ prop: 'width', sizes: [25, 35], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const AddressFirstLine = styled.p`
  margin-top: 12px;
  margin-bottom: 0;

  color: ${colors.gris30};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CallToAction = styled(Button)`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const StickerImg = styled.img`
  ${({ $minWidth, $maxWidth }) =>
    $minWidth &&
    $maxWidth &&
    breakpointsRange(
      [
        {
          prop: 'width',
          sizes: [$minWidth, $maxWidth],
          bases: [16, 20],
        },
      ],
      breakpoints.spacings
    )};
`;

export const MapPinIcon = styled.img`
  height: 100%;

  ${breakpointsRange(
    [{ prop: 'width', sizes: [34, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
