// vendors
import styled from 'styled-components';
import Img from 'gatsby-image';

// utils
import { greaterThan } from '../../utils/mediaQuery';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const StyledSpeakerCard = styled.div`
  ${breakpointsRange(
    [
      { prop: '--gap', sizes: [12, 24] },
      { prop: 'padding', sizes: [12, 24] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const SpeakerPicture = styled(Img)`
  border-radius: 6px;

  ${greaterThan(768)} {
    margin-right: 0;
  }

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [80, 100], bases: [16, 20] },
      { prop: 'height', sizes: [80, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const SpeakerLinks = styled.ul`
  display: flex;
  max-width: 300px;
  margin: 0;
  padding: 0;

  list-style: none;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [6, 10], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const SpeakerLinkItem = styled.li`
  width: 14px;
  margin-right: 14px;

  line-height: 1;

  ${greaterThan(768)} {
    width: 20%;
    margin-right: 0;
    padding-right: 8px;
  }
`;

export const LinkIcon = styled.img`
  width: 14px;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'width', sizes: [14, 14], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ${greaterThan(768)} {
    width: 100%;
  }
`;

export const SpeakerHeader = styled.p`
  margin: 0;

  color: ${colors.blueberry};
`;

export const HeaderInfo = styled.span`
  display: block;

  font-weight: ${fontWeights.regular};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [16, 22], bases: [14, 16], unit: '' },
    ],
    breakpoints.spacings
  )};

  :first-child {
    font-weight: ${fontWeights.bold};

    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [20, 22], bases: [16, 16], unit: '' },
      ],
      breakpoints.spacings
    )};
  }

  ${greaterThan(768)} {
    display: inline-block;
    margin-right: 8px;

    ::after {
      display: inline-block;
      margin: 0;
      margin-left: 8px;

      color: ${colors.gris40};

      font-weight: ${fontWeights.regular};

      content: '|';
    }

    :last-child {
      &::after {
        display: none;
      }
    }
  }
`;

export const SpeakerDescription = styled.div`
  margin: 0;

  color: ${colors.blueberry30};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 14], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [16, 18], bases: [12, 14], unit: '' },
    ],
    breakpoints.spacings
  )};

  p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
