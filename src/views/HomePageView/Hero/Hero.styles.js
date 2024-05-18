// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

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
      { prop: 'marginTop', sizes: [100, 64], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [100, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const englishTitleStyle = css`
  line-height: 1 !important;
  text-align: center;

  img {
    ${breakpointsRange(
      [{ prop: 'bottom', sizes: [50, 80], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const HeroTitle = styled.h2`
  position: relative;

  display: inline-block;

  text-align: left;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [100, 200], bases: [16, 20] }],
    breakpoints.spacings
  )};

  img {
    position: absolute;

    transform: translateY(100%);

    ${breakpointsRange(
      [
        { prop: 'width', sizes: [230, 650], bases: [16, 20] },
        { prop: 'bottom', sizes: [50, 150], bases: [16, 20] },
        { prop: 'left', sizes: [100, 200], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  ${({ $english }) => $english && englishTitleStyle};
`;

export const TextureWrapper = styled.div`
  position: absolute;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  transform: rotate(-180deg);

  ${breakpointsRange(
    [
      { prop: 'top', sizes: [-150, -200], bases: [16, 20] },
      { prop: 'left', sizes: [0, 200], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const HeroIntro = styled.h3`
  margin-top: 12px;
  margin-bottom: 0;

  color: ${colors.blueberry10};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [28, 48], bases: [16, 20] },
      { prop: 'marginTop', sizes: [32, 36], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Address = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 36], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const MapPinIcon = styled.img`
  height: 100%;

  ${breakpointsRange(
    [{ prop: 'width', sizes: [32, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CTAWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 36], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
