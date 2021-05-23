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

  color: ${({ theme }) => theme.color.checkmark};

  transform: scale(0);
  opacity: 0;
`;

/* Checkbox label style */
export const CheckboxLabel = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.color.label};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:last-child {
    margin-bottom: 0;
  }
`;

/* Custom checkbox style */
const StyledCheckbox = styled.div`
  position: relative;

  display: inline-flex;
  flex-shrink: 0;
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

  background-color: ${({ theme }) => theme.color.background};
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
`;

export default StyledCheckbox;
