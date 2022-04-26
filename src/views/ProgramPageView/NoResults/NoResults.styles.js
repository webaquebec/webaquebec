import styled from 'styled-components';
import colors from '../../../styles/colors';

import breakpointsRange from '../../../utils/breakpointsRange';

import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const Highlight = styled.p`
  margin: 0;

  color: ${colors.gris100};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 32], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 38], bases: [24, 32], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const ListItem = styled.li``;
