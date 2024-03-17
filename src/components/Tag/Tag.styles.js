// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import breakpoints from '../../styles/breakpoints';

export const speakerStyle = css`
  color: ${colors.blueberry};
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
  color: ${colors.blueberry};

  background-color: ${colors.blueberry90};
`;

export const outlinedStyle = css`
  color: ${colors.gris80};

  font-weight: ${fontWeights.regular};

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
  display: flex;
  align-items: center;
  height: 15px;
  margin-right: 8px;
`;

export const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;

  color: ${({ $category }) => ($category && $category.color) || colors.gris90};
  font-weight: ${fontWeights.medium};

  background-color: ${({ $category }) =>
    ($category && $category.bgColor) || colors.gris20};
  border-radius: 8px;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 12], bases: [16, 20] },
      { prop: 'padding', sizes: [8, 8], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  /* Apply speaker style when speaker props defined */
  ${({ $speaker }) => $speaker && speakerStyle}

  /* Apply eventType style when eventType props defined */
  ${({ $eventType }) => $eventType && eventTypeStyle}

  /* Apply eventType style when eventType props defined */
  ${({ $outlined }) => $outlined && outlinedStyle}
`;
