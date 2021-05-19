// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { fontFamilies, fontWeights } from '../../../styles/typography';

export const DateList = styled.ul`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: space-between;

  margin: 0;
  padding: 0;

  overflow-x: auto;

  list-style: none;
  transform: translateY(-50%);
  scroll-snap-type: x mandatory;
`;

export const DateListItem = styled.li`
  scroll-snap-align: center;

  text-align: center;

  @media screen and (max-width: 40em) {
    flex: 0 0 120px;
  }
`;

export const DateTab = css`
  height: 100%;

  background-color: ${colors.white};
  border-radius: 16px;

  @media screen and (max-width: 40em) {
    width: calc(100% - 8px);
  }
`;

export const ActiveDateTab = css`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};

  background-color: ${colors.bleu80};
  border-color: ${colors.bleu80};
`;
