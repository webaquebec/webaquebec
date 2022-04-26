import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';
import { contentStyle } from '../Blocks.styles';

export const Container = styled.div`
  --max-content-post-width: 1066px;

  /* ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [56, 40], bases: [16, 20] }],
    breakpoints.spacings
  )}; */

  figure {
    margin: 0;

    ${contentStyle}
  }

  figure > * {
    width: 100%;
    height: 100%;
  }

  figure img {
    border-radius: 12px;
  }
`;

export default { Container };
