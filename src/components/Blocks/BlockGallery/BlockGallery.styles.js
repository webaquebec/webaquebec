// vendors
import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';
// import breakpointsRange from '../../../utils/breakpointsRange';

// utils
import { lessThan } from '../../../utils/mediaQuery';

// styles
import { caption2Style, unstyledListStyle } from '../../../styles/global';
import { contentStyle } from '../Blocks.styles';
// import breakpointsRange from '../../../utils/breakpointsRange';

const Container = styled.div`
  --max-content-post-width: 1066px;
  --item-min-width: 45%;

  ${lessThan(breakpoints[0])} {
    --item-min-width: 65%;
  }

  figure {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  figure > * {
    width: inherit;
    height: inherit;
  }

  figure img {
    border-radius: 12px;
  }

  figcaption {
    ${caption2Style}
  }

  ul {
    ${unstyledListStyle}

    display: grid;
    grid-gap: var(--container-gutter);
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));

    li:nth-last-child(1) {
      ${contentStyle};
    }

    /* < 1280px */
    ${lessThan(breakpoints[7])} {
      display: flex;
      flex-wrap: nowrap;
      gap: 0;

      width: 100vw;

      /* margin: 0 -24px calc(-0.25 * var(--container-gutter)); */
      margin: 0 calc(-1 * var(--container-gutter));
      padding-bottom: var(--container-gutter);

      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x proximity;

      ::before,
      ::after {
        flex: 0 0 calc(var(--container-gutter));

        content: '';
      }

      li {
        scroll-snap-align: center;

        :not(:last-child) {
          margin-right: var(--container-gutter);
        }
      }

      /* applied when more than 2 items only */
      li:nth-last-child(n + 3):first-child,
      li:nth-last-child(n + 3):first-child ~ li {
        flex: 0 0 calc(var(--item-min-width) - var(--container-gutter) * 2);
      }
    }
  }
`;

export default Container;
