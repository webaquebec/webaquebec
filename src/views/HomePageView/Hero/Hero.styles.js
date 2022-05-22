// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import { titleStyle } from '../../../styles/global';

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
      { prop: 'marginTop', sizes: [120, 200], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [128, 173], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const HeroTitle = styled.h2`
  ${titleStyle};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [60, 180], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [58, 160], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > span {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [64, 180], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [58, 160], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }
`;

export const HeroIntro = styled.h3`
  margin-top: 12px;
  margin-bottom: 0;

  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [28, 48], bases: [16, 20] },
      { prop: 'marginTop', sizes: [32, 48], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [120, 160], bases: [16, 20] },
    ],
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

export const MapPinIcon = styled.img`
  height: 100%;

  ${breakpointsRange(
    [{ prop: 'width', sizes: [34, 64], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
