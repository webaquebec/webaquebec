import styled from 'styled-components';
import { textInputStyles } from '../../TextInputField';

export const TextAreaOutline = styled(textInputStyles.TextInputOutline)``;

const StyledTextArea = styled.textarea`
  ${textInputStyles.defaultStyle}

  height: 100%;
`;

export default StyledTextArea;
