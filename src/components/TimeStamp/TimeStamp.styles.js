import styled from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';

export const TimeWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [12, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};

  line-height: ${16 / 12};
`;
export const Wrapper = styled.div``;
