import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

// utils
import { greaterThan } from '../../utils/mediaQuery';

// styles
import colors from '../../styles/colors';

export const Overlay = styled.div`
  position: absolute;
  left: 0;

  width: 100%;
  height: 40%;

  background-image: linear-gradient(
    to var(--overlay-position),
    rgba(235, 235, 235, 0) 0%,
    ${colors.gris} 100%
  );
`;

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
  --max-height: ${({ isHomePage }) => (isHomePage ? `2077px` : `488px`)};
  --overlay-position: bottom;

  top: 0;

  max-height: var(--max-height);

  ${Overlay} {
    bottom: 0;
  }
`;

export const bottomBackgroundStyle = css`
  --max-height: 1247px;
  --overlay-position: top;

  bottom: 0;

  max-height: var(--max-height);

  ${Overlay} {
    top: 0;
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 0;

  z-index: -1000;

  width: 100%;
  height: 100%;

  ${({ position }) => position === 'top' && topBackgroundStyle};

  ${({ position }) => position === 'bottom' && bottomBackgroundStyle};
`;