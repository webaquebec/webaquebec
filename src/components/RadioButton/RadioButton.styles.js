/* stylelint-disable no-descending-specificity */
// vendors
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';

// styles
import { speed, easing } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

// utils
// import { greaterThan } from '../../utils/mediaQuery';
import breakpointsRange from '../../utils/breakpointsRange';

/* Default browser radio button visually hidden to allow customizing */
export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  ${hideVisually()};
`;

const colorTeal = css`
  color: ${colors.turquoise80};
`;

const colorBlue = css`
  color: ${colors.bleu80};
`;

/* Custom radio input label style */
export const RadioButtonLabel = styled.label`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: left;

  color: ${colors.gris80};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  text-decoration: none;
  word-break: keep-all;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  ${({ $checked }) => $checked && colorBlue}
  ${({ $darkTheme, $checked }) => $darkTheme && $checked && colorTeal}
`;

/* Custom radio button style */
const StyledRadioButton = styled.div`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'minWidth', sizes: [12, 12], bases: [16, 20] },
      { prop: 'height', sizes: [12, 12], bases: [16, 20] },
      { prop: 'marginRight', sizes: [8, 8], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  background-color: transparent;
  border: 2px solid currentColor;
  border-radius: 50%;

  cursor: pointer;

  ::before {
    /* Focus styles go there  */
    position: absolute;

    width: calc(100% + 12px);
    height: calc(100% + 12px);

    background-color: transparent;
    border: 1px solid;
    border-radius: 50%;

    transform: scale(0);
    opacity: 0;

    transition-timing-function: ${easing.inOutBack};
    transition-duration: ${speed.fast};
    transition-property: opacity, transform;

    content: '';

    will-change: opacity, transform;
  }

  ::after {
    /* Checked styles go there */
    position: absolute;

    ${breakpointsRange(
      [
        { prop: 'width', sizes: [12, 12], bases: [16, 20] },
        { prop: 'height', sizes: [12, 12], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};

    background-color: currentColor;
    border-radius: 50%;

    transition-timing-function: ${easing.inOutBack};
    transition-duration: ${speed.fast};
    transition-property: opacity, transform;

    content: '';

    will-change: opacity, transform;
  }

  /* Handle displaying whether it is checked or on focus */
  ${HiddenRadioButton}:not(:checked) ~ &::after {
    transform: scale(0);
    opacity: 0;
  }

  ${HiddenRadioButton}:checked ~ &::after {
    transform: scale(1);
    opacity: 1;
  }

  ${HiddenRadioButton}:focus ~ &::before {
    transform: scale(1);
    opacity: 1;
  }

  /* Disabled style */
  ${HiddenRadioButton}:disabled ~ & {
    background-color: lightgrey;

    cursor: not-allowed;
  }

  ${HiddenRadioButton}:disabled ~ &::after {
    background-color: lightgrey;
  }

  ${({ $checked }) => $checked && colorBlue}
  ${({ $darkTheme, $checked }) => $darkTheme && $checked && colorTeal}
`;

export default StyledRadioButton;
