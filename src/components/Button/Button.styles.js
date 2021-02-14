// vendors
import styled, { css } from 'styled-components';
import { rem } from 'polished';

// styles
import colors from '../../styles/colors';
import fontWeights from '../../styles/typography';

export const primaryStyle = css`
  color: ${colors.bleu80};

  background-color: ${colors.turquoise80};

  :focus,
  :hover:not(:disabled) {
    color: ${colors.turquoise80};

    background-color: ${colors.bleu80};
  }
`;

export const smallStyle = css`
  padding: 12px 30px;

  font-size: ${rem(16)};
`;

/* Default button styled */
const StyledButton = styled.button`
  display: inline-block;
  padding: 28px 34px;

  color: ${colors.turquoise80};

  font-weight: ${fontWeights.medium};
  font-size: ${rem(24)};
  line-height: ${rem(24)};

  background-color: ${colors.bleu80};
  border: 0;
  border-radius: 16px;
  outline: 0;
  cursor: pointer;

  :disabled {
    color: ${colors.gris100};

    background-color: ${colors.gris40};
    cursor: not-allowed;
  }

  :focus,
  :hover:not(:disabled) {
    color: ${colors.bleu80};

    background-color: ${colors.turquoise80};
  }

  appearance: none;

  /* Apply primary style when primary props defined */
  ${({ $primary }) => $primary && primaryStyle}

  /* Apply small style when small props defined */
  ${({ $small }) => $small && smallStyle}
`;

export default StyledButton;
