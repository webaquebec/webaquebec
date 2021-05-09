// vendors
import styled from 'styled-components';
import { hideVisually } from 'polished';

// images
import IconCheckMark from '../../images/IconCheckMark';

// styles
import breakpoints from '../../styles/breakpoints';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

/* Default browser checkbox visually hidden to allow customizing */
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${hideVisually}
`;

/* CheckMark style */
export const CheckMark = styled(IconCheckMark)`
  position: absolute;

  height: 50%;

  margin-top: 3%;

  transform: scale(0);
  opacity: 0;
`;

/* Checkbox label style */
export const CheckboxLabel = styled.label`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: left;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  /* Other checkbox label styles go there */
`;

/* Custom checkbox style */
const StyledCheckbox = styled.div`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [20, 20], bases: [16, 20] },
      { prop: 'height', sizes: [20, 20], bases: [16, 20] },
      { prop: 'marginRight', sizes: [8, 8], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  border: 2px solid;

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
`;

export default StyledCheckbox;
