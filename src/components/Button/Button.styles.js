// vendors
import styled, { css } from 'styled-components';
import { em } from 'polished';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: ${em(34, 22)};
  min-width: 30px;
`;

export const TextWrapper = styled.span`
  flex-grow: 1;
`;

export const animatedPrimaryStyle = css`
  :focus,
  :hover:not(:disabled) {
    transform: rotate3d(0, 0, 1, 4deg);
  }
`;

export const primaryStyle = css`
  color: ${colors.bleu80};

  background-color: ${colors.turquoise80};

  :focus,
  :hover:not(:disabled) {
    background-color: ${colors.turquoise40};
  }

  ${({ $animated }) => $animated && animatedPrimaryStyle}
`;

export const outlinedPrimaryFocusHoverStyle = css`
  color: ${colors.bleu};

  background-color: ${colors.turquoise80};
  border-color: ${colors.turquoise80};
`;

export const outlinedPrimaryStyle = css`
  color: ${colors.turquoise80};

  background-color: transparent;

  :focus,
  :hover:not(:disabled) {
    ${outlinedPrimaryFocusHoverStyle};
  }
`;

export const outlinedFocusHoverStyle = css`
  color: ${colors.turquoise80};

  background-color: ${colors.bleu};
  border-color: ${colors.bleu};
`;

export const outlinedIconStyle = css`
  ${IconContainer} {
    ${breakpointsRange(
      [
        { prop: 'marginTop', sizes: [-31, -31], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [-31, -31], bases: [16, 20] },
        { prop: 'paddingLeft', sizes: [32, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};

    border-left: 3px solid;
  }
`;

export const outlinedIconFirstStyle = css`
  ${IconContainer} {
    padding: 0;
    ${breakpointsRange(
      [{ prop: 'paddingRight', sizes: [32, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};

    border: 0;
    border-right: 3px solid;
  }
`;

export const outlinedStyle = css`
  color: ${colors.bleu};

  background-color: transparent;
  border: 3px solid currentColor;
  border-radius: 5px;

  :focus,
  :hover:not(:disabled) {
    ${outlinedFocusHoverStyle}
  }

  ${({ $primary }) => $primary && outlinedPrimaryStyle}

  ${({ $hasIcon }) => $hasIcon && outlinedIconStyle};

  ${({ $iconFirst }) => $iconFirst && outlinedIconFirstStyle};
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

export const iconFirstStyle = css`
  ${TextWrapper} {
    order: 1;

    margin: 0;
    ${breakpointsRange(
      [{ prop: 'marginLeft', sizes: [32, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};

    text-align: right;
  }
`;

export const smallIconStyle = css`
  ${IconContainer} {
    margin: 0;

    border: 0;
  }
`;

export const iconStyle = css`
  ${TextWrapper} {
    order: -1;

    margin: 0;
    ${breakpointsRange(
      [{ prop: 'marginRight', sizes: [32, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};

    text-align: left;
  }

  ${({ $iconFirst }) => $iconFirst && iconFirstStyle}

  ${({ $small }) => $small && smallIconStyle};
`;

export const animatedStyle = css`
  transform: rotate3d(0);

  will-change: transform;

  :focus,
  :hover:not(:disabled) {
    transform: rotate3d(0, 0, 1, -4deg);
  }
`;

/* Default button styled */
const StyledButton = styled.button`
  display: inline-flex;

  color: ${colors.turquoise80};

  font-weight: ${fontWeights.medium};
  text-decoration: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 24], bases: [16, 20], unit: '' },
      { prop: 'paddingTop', sizes: [28, 28], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [32, 32], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [28, 28], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [32, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  background-color: ${colors.bleu80};
  border: 0;
  border-radius: 16px;
  outline: 0;
  cursor: pointer;

  appearance: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${speed.fast};
  }

  :focus,
  :hover:not(:disabled) {
    background-color: ${colors.bleu90};
  }

  :disabled {
    color: ${colors.gris100};

    background-color: ${colors.gris40};
    cursor: not-allowed;
  }

  /* Apply animated style when animated props defined */
  ${({ $animated }) => $animated && animatedStyle}

  /* Apply primary style when primary props defined */
  ${({ $primary }) => $primary && primaryStyle}

  /* Apply small style when small props defined */
  ${({ $small }) => $small && smallStyle}

  /* Apply outlined style when outlined props defined */
  ${({ $outlined }) => $outlined && outlinedStyle}

  /* Apply hasIcon style when hasIcon props defined */
  ${({ $hasIcon }) => $hasIcon && iconStyle}
`;

export default StyledButton;
