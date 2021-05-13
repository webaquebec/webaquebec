// vendors
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';

// images
import IconCheckMark from '../../images/IconCheckMark';

// styles
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

/* Default browser checkbox visually hidden to allow customizing */
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${hideVisually}
`;

const colorTeal = css`
  color: ${colors.turquoise80};
`;

const backgroundTeal = css`
  background-color: ${colors.turquoise80};
`;

const colorBlue = css`
  color: ${colors.bleu80};
`;

const backgroundBlue = css`
  background-color: ${colors.bleu80};
`;

/* CheckMark style */
export const CheckMark = styled(IconCheckMark)`
  position: absolute;

  height: 50%;

  margin-top: 3%;

  color: ${colors.white};

  transform: scale(0);
  opacity: 0;

  ${({ $checked }) => $checked && colorBlue}
  ${({ $darkTheme, $checked }) => $darkTheme && $checked && colorTeal}
`;

/* Checkbox label style */
export const CheckboxLabel = styled.label`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: left;

  color: ${colors.gris80};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  /* Other checkbox label styles go there */
  ${({ $checked }) => $checked && colorBlue}
  ${({ $darkTheme, $checked }) => $darkTheme && $checked && colorTeal}
`;

/* Custom checkbox style */
const StyledCheckbox = styled.div`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [12, 12], bases: [16, 20] },
      { prop: 'height', sizes: [12, 12], bases: [16, 20] },
      { prop: 'marginRight', sizes: [8, 8], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  border: 2px solid;
  border-radius: 2px;

  outline: 0;

  cursor: pointer;

  appearance: none;

  /* Remove the default checkmark on IE */
  :-ms-check {
    display: none;
  }

  /* Disabled checkbox style */
  ${HiddenCheckbox}:disabled ~ & {
    cursor: not-allowed;
  }

  /* Disabled checkbox style on the svg checkmark path  */
  ${HiddenCheckbox}:disabled ~ & > svg > path {
    /* ex. fill: #ccc; */
  }

  /* Checked style on the svg checkmnark */
  ${HiddenCheckbox}:checked ~ & > svg {
    transform: scale(1);
    opacity: 1;
  }

  ${HiddenCheckbox}:checked {
    background-color: ${colors.bleu80};
  }

  ${({ $checked }) => $checked && backgroundBlue}
  ${({ $darkTheme, $checked }) => $darkTheme && $checked && backgroundTeal}
`;

export default StyledCheckbox;
