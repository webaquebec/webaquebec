// vendors
import styled, { css } from 'styled-components';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const primaryStyle = css`
  color: ${colors.bleu80};

  background-color: ${colors.turquoise80};

  transform: rotate3d(0);

  will-change: transform;

  /* Pour ne pas effectuer l'animation si l'utilisateur a coché l'option de minimiser 
  la quantité d'animation ou de mouvement dans les paramètres de l'OS ou du navigateur. */
  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${speed.fast}; /* ease comme timing-function par défaut */
  }

  :focus,
  :hover:not(:disabled) {
    background-color: ${colors.turquoise40};
    transform: rotate3d(0, 0, 1, 4deg);
  }
`;

export const smallStyle = css`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [20, 24], bases: 16, unit: '' },
      { prop: 'paddingTop', sizes: [12, 12], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [30, 30], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [12, 12], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [30, 30], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

/* Default button styled */
const StyledButton = styled.button`
  display: inline-block;

  color: ${colors.turquoise80};

  font-weight: ${fontWeights.medium};
  text-decoration: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 24], bases: [16, 20], unit: '' },
      { prop: 'paddingTop', sizes: [28, 28], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [34, 34], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [28, 28], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [34, 34], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  background-color: ${colors.bleu80};
  border: 0;
  border-radius: 16px;
  outline: 0;
  transform: rotate3d(0);
  cursor: pointer;

  appearance: none;

  will-change: transform;

  /* Pour ne pas effectuer l'animation si l'utilisateur a coché l'option de minimiser 
  la quantité d'animation ou de mouvement dans les paramètres de l'OS ou du navigateur. */
  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${speed.fast}; /* ease comme timing-function par défaut */
  }

  :focus,
  :hover:not(:disabled) {
    background-color: ${colors.bleu90};
    transform: rotate3d(0, 0, 1, -4deg);
  }

  :disabled {
    color: ${colors.gris100};

    background-color: ${colors.gris40};
    cursor: not-allowed;
  }

  /* Apply primary style when primary props defined */
  ${({ $primary }) => $primary && primaryStyle}

  /* Apply small style when small props defined */
  ${({ $small }) => $small && smallStyle}
`;

export default StyledButton;
