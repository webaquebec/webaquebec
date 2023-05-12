import styled from 'styled-components';
import { textInputStyles } from '../../TextInputField';
import colors from '../../../styles/colors';
import breakpointsRange from '../../../utils/breakpointsRange';
import breakpoints from '../../../styles/breakpoints';

export const TextAreaOutline = styled(textInputStyles.TextInputOutline)`
  background-color: ${colors.white};
`;

const StyledTextArea = styled.textarea`
  ${textInputStyles.defaultStyle}

  height: 100%;
  padding-top: 0 !important;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [24, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export default StyledTextArea;
