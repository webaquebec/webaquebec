import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

// utils
import { greaterThan } from '../../utils/mediaQuery';

// styles
import zIndexes from '../../styles/zIndexes';

export const StyledBackground = styled(Img)`
  height: 100%;
  min-height: var(--max-height);

  & > img {
    object-position: 50% 10% !important;
  }

  ${greaterThan(1280)} {
    & > img {
      object-fit: fill !important;
    }
  }
`;

export const topBackgroundStyle = css`
  --max-height: ${({ isHomePage }) => (isHomePage ? `2247px` : `556px`)};

  top: 0;

  max-height: var(--max-height);

  ${greaterThan(576)} {
    --max-height: ${({ isHomePage }) => (isHomePage ? `2477px` : `556px`)};
  }

  ${greaterThan(768)} {
    --max-height: ${({ isHomePage }) => (isHomePage ? `2877px` : `556px`)};
  }
`;

export const bottomBackgroundStyle = css`
  --max-height: 1847px;

  bottom: 0;

  max-height: var(--max-height);
`;

export const Container = styled.div`
  position: absolute;
  left: 0;

  z-index: ${zIndexes.background};

  width: 100%;
  height: 100%;

  ${({ position }) => position === 'top' && topBackgroundStyle};

  ${({ position }) => position === 'bottom' && bottomBackgroundStyle};
`;
