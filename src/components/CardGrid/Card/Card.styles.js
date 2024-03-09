// vendors
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { outlinedFocusHoverStyle } from '../../Button/Button.styles';
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';

// Components
import Button from '../../Button';

// images
import { fontWeights } from '../../../styles/typography';

export const cardBoxStyle = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const contentBoxStyle = css`
  flex-grow: 1;
`;

export const Title = styled.p`
  color: ${colors.black};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [33, 33], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Complement = styled.p`
  display: flex;
  align-items: center;

  color: ${colors.watermelon};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const Content = styled.div`
  color: ${colors.gris90};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CardButton = styled(Button)`
  width: calc(100% + 3px * 2);
  margin-right: -3px;
  margin-bottom: -3px;
  margin-left: -3px;

  border-radius: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};
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
      ${outlinedFocusHoverStyle}
    }
  }
`;
