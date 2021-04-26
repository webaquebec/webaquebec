// vendors
import styled from 'styled-components';
import { Link } from 'gatsby';

// styles
import { outlinedFocusHoverStyle } from '../../Button/Button.styles';

// Components
import Button from '../../Button';

export const Title = styled.p``;

export const Content = styled.div``;

export const CardButton = styled(Button)`
  width: calc(100% + 3px * 2);
  margin-right: -3px;
  margin-bottom: -3px;
  margin-left: -3px;

  border-radius: 0;
`;

export const StyledCard = styled(Link)`
  position: relative;

  display: flex;
  flex-flow: column;

  height: 100%;
  overflow: hidden;

  text-decoration: none;

  cursor: pointer;

  :hover,
  :focus {
    ${CardButton} {
      /* ${outlinedFocusHoverStyle} */
    }
  }
`;
