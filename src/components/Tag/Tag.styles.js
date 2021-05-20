// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import breakpoints from '../../styles/breakpoints';

export const designRoomStyle = css`
  color: ${colors.mauve80};

  background-color: ${colors.mauve10};
`;

export const commRoomStyle = css`
  color: ${colors.rose80};

  background-color: ${colors.rose10};
`;

export const devRoomStyle = css`
  color: ${colors.ciel80};

  background-color: ${colors.ciel10};
`;

export const innovationRoomStyle = css`
  color: ${colors.turquoise90};

  background-color: ${colors.turquoise10};
`;

export const speakerStyle = css`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.normal};
`;

export const SpeakerInfo = styled.span`
  font-weight: ${fontWeights.regular};

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

export const eventTypeStyle = css`
  color: ${colors.bleu80};

  background-color: ${colors.bleu10};
`;

export const outlinedStyle = css`
  color: ${colors.gris80};

  font-weight: ${fontWeights.bold};

  background-color: transparent;
  border: 2px solid ${colors.gris30};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 16], bases: [16, 20] },
      { prop: 'padding', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const TagIcon = css`
  height: 15px;
  margin-right: 8px;
`;

export const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;

  /* margin: 0 16px 16px 0; */

  padding: 12px;

  color: ${colors.gris90};
  font-weight: ${fontWeights.medium};
  vertical-align: top;

  background-color: ${colors.gris20};
  border-radius: 8px;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 12], bases: [16, 20] },
      { prop: 'padding', sizes: [12, 12], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  /* Apply designRoom style when designRoom props defined */
  ${({ $designRoom }) => $designRoom && designRoomStyle}

  /* Apply commRoom style when commRoom props defined */
  ${({ $commRoom }) => $commRoom && commRoomStyle}
  
  /* Apply devRoom style when devRoom props defined */
  ${({ $devRoom }) => $devRoom && devRoomStyle}
  
  /* Apply innovationRoom style when innovationRoom props defined */
  ${({ $innovationRoom }) => $innovationRoom && innovationRoomStyle}

  /* Apply speaker style when speaker props defined */
  ${({ $speaker }) => $speaker && speakerStyle}
  
  /* Apply eventType style when eventType props defined */
  ${({ $eventType }) => $eventType && eventTypeStyle}
  
  /* Apply eventType style when eventType props defined */
  ${({ $outlined }) => $outlined && outlinedStyle}
`;

export const Design = css`
  background-color: ${colors.gris20};
`;
