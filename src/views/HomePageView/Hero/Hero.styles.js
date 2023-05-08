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
      { prop: 'marginTop', sizes: [120, 160], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [128, 173], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const HeroIntro = styled.h3`
  margin-top: 12px;
  margin-bottom: 0;

  color: ${colors.bleu100};
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
