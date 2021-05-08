// vendors
import styled from 'styled-components';

// styles
import colors from '../../styles/colors';

export const StyledFilterTag = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 24px 16px 0;
  padding: 10px 18px 10px 24px;

  color: ${colors.white};
  font-size: 16px;
  line-height: 20px;

  background-color: ${colors.bleu80};
  border-radius: 25px;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 12px;

  border: 0;
  cursor: pointer;
`;
