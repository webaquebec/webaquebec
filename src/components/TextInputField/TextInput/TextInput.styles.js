// vendors
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const defaultStyle = css`
  position: relative;

  z-index: 1;

  color: ${colors.bleu};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 22], bases: [14, 16] },
      { prop: 'paddingTop', sizes: [14, 20], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [12, 20], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [5, 9], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [12, 20], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  font-weight: ${fontWeights.regular};

  background-color: ${colors.white};

  border: 0;
  border-radius: 16px;

  :focus {
    outline: 0;
  }

  appearance: none;

  :disabled {
    color: ${colors.gris90};

    background-color: ${colors.gris40};
  }
`;

export const TextInputOutline = styled.span`
  --outline-width: 1px;

  position: absolute;
  top: calc(var(--outline-width) * -1);
  left: calc(var(--outline-width) * -1);
  z-index: 0;

  width: calc(100% + var(--outline-width) * 2);
  height: calc(100% + var(--outline-width) * 2);

  background-color: transparent;
  border: var(--outline-width) solid ${colors.bleu};
  border-radius: 16px;

  content: '';

  input:focus ~ &,
  textarea:focus ~ & {
    --outline-width: 3px;
  }

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${colors.gris90};
    `}

  ${(props) =>
    props.error &&
    css`
      border-color: ${colors.red};
    `}

  ${(props) =>
    props.error &&
    props.disabled &&
    css`
      border-color: ${lighten(0.16, colors.red)};
    `}
`;

const StyledTextInput = styled.input`
  ${defaultStyle}
`;

export default StyledTextInput;
