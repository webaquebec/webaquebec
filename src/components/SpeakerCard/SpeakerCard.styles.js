// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const StyledSpeakerCard = css`
  padding: 24px;

  background-color: ${colors.gris20};
  border-radius: 8px;
`;

export const SpeakerPicture = styled.img`
  border-radius: 6px;
`;

export const SpeakerLinks = styled.ul`
  display: flex;
  max-width: 300px;
  margin: 10px 0 0;
  padding: 0;

  list-style: none;
`;

export const SpeakerLinkItem = styled.li`
  width: 20%;
  padding-right: 8px;
`;

export const LinkIcon = styled.img`
  width: 100%;
  max-width: 32px;
`;

export const SpeakerHeader = styled.p`
  color: ${colors.bleu80};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'marginTop', sizes: [16, 0], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const HeaderInfo = styled.span`
  :first-child {
    font-weight: ${fontWeights.bold};
  }

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
`;

export const SpeakerDescription = styled.div`
  color: ${colors.gris90};
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 14], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
