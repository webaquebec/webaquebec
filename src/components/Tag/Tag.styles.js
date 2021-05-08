// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';

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

export const talkerStyle = css`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.normal};
`;

export const TalkerInfo = styled.span`
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

export const TagIcon = css`
  height: 15px;
  margin-right: 8px;
`;

export const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 16px 16px 0;
  padding: 12px;

  color: ${colors.gris90};
  font-weight: ${fontWeights.medium};
  font-size: 12px;
  vertical-align: top;

  background-color: ${colors.gris20};
  border-radius: 8px;

  /* Apply designRoom style when designRoom props defined */
  ${({ $designRoom }) => $designRoom && designRoomStyle}

  /* Apply commRoom style when commRoom props defined */
  ${({ $commRoom }) => $commRoom && commRoomStyle}
  
  /* Apply devRoom style when devRoom props defined */
  ${({ $devRoom }) => $devRoom && devRoomStyle}
  
  /* Apply innovationRoom style when innovationRoom props defined */
  ${({ $innovationRoom }) => $innovationRoom && innovationRoomStyle}

  /* Apply talker style when talker props defined */
  ${({ $talker }) => $talker && talkerStyle}
  
  /* Apply eventType style when eventType props defined */
  ${({ $eventType }) => $eventType && eventTypeStyle}
`;

export const Design = css`
  background-color: ${colors.gris20};
`;
