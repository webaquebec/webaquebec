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

  color: ${({ theme }) => theme.color.checkmark};

  transform: scale(0);

  will-change: transform;

  /* opacity: 0; */
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
    [{ prop: 'fontSize', sizes: [18, 16], bases: [16, 20] }],
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
      { prop: 'width', sizes: [14, 14], bases: [16, 20], unit: 'em' },
      { prop: 'height', sizes: [14, 14], bases: [16, 20], unit: 'em' },
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

  /* Checked style on the svg checkmnark */
  ${HiddenCheckbox}:checked ~ & > ${CheckMark} {
    transform: scale(1);
  }

  ${HiddenCheckbox}:focus ~ & {
    outline: 2px dotted ${({ theme }) => theme.color.label};
    outline-offset: 2px;
  }
`;

export default StyledCheckbox;
