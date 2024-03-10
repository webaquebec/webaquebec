// vendors
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// utils
import breakpointsRange from '../../../../utils/breakpointsRange';
import { lessThan } from '../../../../utils/mediaQuery';

// styles
import breakpoints from '../../../../styles/breakpoints';
import colors from '../../../../styles/colors';
import { fontWeights } from '../../../../styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  ${breakpointsRange(
    [
      { prop: 'minWidth', sizes: [333, 597], bases: [16, 20] },
      { prop: 'margin-top', sizes: [104, 106], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [0, 120], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > * {
    position: relative;

    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [-23, -53], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  /* > :nth-child(1) {
    position: relative;
    z-index: 1;
  } */

  > :nth-child(1) {
    z-index: 0;

    transform: translateX(8%) rotate(8deg);
  }

  > :nth-child(2) {
    z-index: 0;

    transform: translateX(43%) rotate(-8deg);

    ${lessThan(420)} {
      transform: translateX(28%) rotate(-8deg);
    }
  }

  > :nth-child(3) {
    transform: translateX(3%) rotate(8deg);
  }
`;

export const SpeakerPicture = styled(GatsbyImage)`
  border: 2px solid ${colors.blueberry};
  border-radius: 16px;
  ${breakpointsRange(
    [
      {
        prop: 'width',
        sizes: [200, 400],
        bases: [16, 20],
      },
      {
        prop: 'height',
        sizes: [200, 400],
        bases: [16, 20],
      },
    ],
    breakpoints.spacings
  )};
`;

export const SpeakerSticker = styled.img`
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

export const SpeakerTag = styled.div`
  position: relative;

  font-weight: ${fontWeights.ultrabold};

  background-color: ${colors.gris};
  border: 2px solid ${colors.blueberry};

  border-radius: 16px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [4, 4] },
      { prop: 'paddingRight', sizes: [14, 14] },
      { prop: 'paddingBottom', sizes: [4, 4] },
      { prop: 'paddingLeft', sizes: [14, 14] },
      { prop: 'fontSize', sizes: [24, 38] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;
