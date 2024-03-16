import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import breakpointsRange from '../../../utils/breakpointsRange';

import { contentStyle } from '../Blocks.styles';

export const Blockquote = styled.blockquote`
  --max-content-post-width: 1066px;

  ${contentStyle};

  color: ${colors.blueberry};

  font-weight: ${fontWeights.bold};
  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [28, 32], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [33, 38], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  quotes: '“' '”' '‘' '’';

  ::before {
    content: open-quote;
  }

  ::after {
    content: close-quote;
  }

  p {
    display: inline;
  }
`;

export default { Blockquote };
