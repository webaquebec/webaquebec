// vendors
import styled, { css } from 'styled-components';

// utils
import { greaterThan } from '../../utils/mediaQuery';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const StyledSpeakerCard = css`
  background-color: ${colors.gris20};
  border-radius: 8px;

  ${breakpointsRange(
    [{ prop: 'padding', sizes: [12, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CardMobileHeader = styled.div`
  display: flex;

  ${greaterThan(768)} {
    display: block;
  }
`;

export const SpeakerPicture = styled.img`
  margin-right: 12px;

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

export const SpeakerInfo = styled.div`
  display: block;

  color: ${colors.bleu80};

  ${greaterThan(768)} {
    display: none;
  }
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
  display: none;

  color: ${colors.bleu80};

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [16, 0], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(768)} {
    display: block;
  }
`;

export const HeaderInfo = styled.span`
  display: block;

  :first-child {
    font-weight: ${fontWeights.bold};
  }

  ${greaterThan(768)} {
    display: inline-block;

    ::after {
      display: inline-block;
      margin: 0 8px;

      color: ${colors.gris40};

      content: '|';
    }

    :last-child {
      &::after {
        display: none;
      }
    }
  }

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [20, 22], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const SpeakerDescription = styled.div`
  color: ${colors.gris90};

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
