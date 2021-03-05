// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { magnifyStyle } from '../../../styles/global';
import breakpoints from '../../../styles/breakpoints';

const Heading = styled.h2`
  ${magnifyStyle};

  max-width: 533px;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [31, 47], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export default Heading;
