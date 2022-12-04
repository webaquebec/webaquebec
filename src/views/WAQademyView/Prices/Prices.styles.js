// vendors
import styled from 'styled-components';

// styles
import breakpoints from '../../../styles/breakpoints';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

const Section = styled.div`
  ${breakpointsRange(
    [{ prop: 'paddingTop', sizes: [98, 138], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export default Section;
