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

  list-style: none;
  transform: translateY(-50%);
`;

export const DateTab = css`
  background-color: ${colors.white};
  border-radius: 16px;
`;

export const ActiveDateTab = css`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};

  background-color: ${colors.bleu80};
  border-color: ${colors.bleu80};
`;
