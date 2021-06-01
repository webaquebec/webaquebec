// vendors
import styled from 'styled-components';
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
import VectorStar from '../../../images/VectorStar';
import { fontWeights } from '../../../styles/typography';

export const Title = styled.p`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [33, 33], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Star = styled(VectorStar)`
  margin-right: 8px;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [16, 16], bases: [16, 20] },
      { prop: 'height', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Date = styled.p`
  display: flex;
  align-items: center;

  color: ${colors.mauve80};
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
      /* ${outlinedFocusHoverStyle} */
    }
  }
`;
