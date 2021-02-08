// vendors
import styled, { css } from 'styled-components';
// import { em, rem } from 'polished';

// utils
// import { lessThan } from '@utils/mediaQuery';

// styles
// import { easing, speed } from '@styles/animation';

export const primaryStyle = css`
  /* Primary button styles go here */
`;

/* Default button styled */
const StyledButton = styled.button`
  outline: 0;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;

    /* Other disabled style goes here */
  }

  :focus {
    /* Focus style goes here */
  }

  :focus,
  :hover:not(:disabled) {
    /* Not disabled focus style goes here */
  }

  appearance: none;

  /* Apply primary style when primary props defined */
  ${({ $primary }) => $primary && primaryStyle}
`;

export default StyledButton;
