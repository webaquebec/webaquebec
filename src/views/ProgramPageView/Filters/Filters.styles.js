// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies } from '../../../styles/typography';

export const Container = styled.div`
  position: sticky;
  top: 160px;

  overflow: hidden;

  background-color: ${colors.white};
  border-radius: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [40, 40] },
      { prop: 'paddingRight', sizes: [40, 40] },
      { prop: 'paddingBottom', sizes: [0, 0] },
      { prop: 'paddingLeft', sizes: [40, 40] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const Title = styled.h2`
  margin: 0;

  color: ${colors.bleu80};
  font-family: ${fontFamilies.redaction35};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 24] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const Button = styled.button`
  padding: 0;

  color: ${colors.gris80};
  text-decoration: underline;

  border: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  cursor: pointer;

  appearance: none;
`;
