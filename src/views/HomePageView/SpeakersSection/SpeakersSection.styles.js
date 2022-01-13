// vendors
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// utils
import { lessThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import { fontFamilies } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';

export const SectionContainer = styled.section`
  color: ${colors.bleu80};

  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [110, 210], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakersContent = styled.div`
  max-width: 500px;
`;

export const SpeakersTitle = styled.h2`
  margin-top: 0;

  span {
    font-family: ${fontFamilies.redaction35};
  }

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakersIntro = styled.p`
  max-width: 421px;
  margin-bottom: 32px;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakersGraphics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpeakersGraphicsWrapper = styled.div`
  ${breakpointsRange(
    [
      { prop: 'minWidth', sizes: [333, 597], bases: [16, 20] },
      { prop: 'margin-top', sizes: [104, 56], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [0, 60], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > * {
    position: relative;

    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [-23, -53], bases: [16, 20] }],
      breakpoints.spacings
    )};

    z-index: 1;
  }

  > :nth-child(1) {
    position: relative;
    z-index: 2;
  }

  > :nth-child(2) {
    transform: translateX(8%);
  }

  > :nth-child(3) {
    z-index: 0;

    transform: translateX(43%);

    ${lessThan(420)} {
      transform: translateX(28%);
    }
  }

  > :nth-child(4) {
    transform: translateX(3%);
  }
`;

export const SpeakersPicture = styled(GatsbyImage)`
  ${breakpointsRange(
    [
      {
        prop: 'maxWidth',
        sizes: [219, 319],
        bases: [16, 20],
      },
    ],
    breakpoints.spacings
  )};
`;

export const SpeakersSticker = styled.img`
  position: relative;

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

export const SpeakersTag = styled.img`
  position: relative;
  z-index: 2;

  height: 100%;

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
