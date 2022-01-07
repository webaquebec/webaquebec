// vendors
import styled from 'styled-components';

// styles
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

const StickerImg = styled.img`
  ${({ $minWidth, $maxWidth }) =>
    $minWidth &&
    $maxWidth &&
    breakpointsRange(
      [
        {
          prop: 'width',
          sizes: [$minWidth, $maxWidth],
          bases: [16, 20],
        },
      ],
      breakpoints.spacings
    )};
`;

export default StickerImg;
