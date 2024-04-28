// vendors
import { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';

const waqademyItem = css`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 19], bases: [16, 16] },
    ],
    breakpoints.spacings
  )};

  a {
    color: ${colors.blueberry};
  }
`;

export default waqademyItem;
