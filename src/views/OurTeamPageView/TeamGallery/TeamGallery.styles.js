// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { lessThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { speed } from '../../../styles/animation';

export const breakpoint = 896;

export const TitleWrapper = styled.div`
  position: relative;

  display: inline-block;
`;

export const GalleryTitle = styled.h3`
  position: relative;
  z-index: 1;

  color: ${colors.blueberry};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 48], bases: [16, 20] },
      { prop: 'marginTop', sizes: [24, 64], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 64], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const GalleryWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [24, 90], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const GalleryList = styled.ul`
  position: relative;
  z-index: 1;

  display: flex;
  flex-wrap: nowrap;
  gap: var(--container-gutter);
  align-items: center;

  margin: 0 -16px 8px -24px;
  padding: 0;
  padding-bottom: calc(0.5 * var(--container-gutter));

  overflow-x: auto;

  list-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;

  ::before,
  ::after {
    flex: 0 0 calc(var(--container-gutter) + 10px);

    content: '';
  }

  ${lessThan(breakpoint)} {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const GalleryItem = styled.li`
  scroll-snap-align: center;

  transition: flex-basis ${speed.fast};

  ${lessThan(breakpoint)} {
    flex: 0 0 calc(45% - var(--container-gutter) * 2);

    &:active,
    &:hover,
    &:focus {
      flex-basis: calc(55% - var(--container-gutter) * 2);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const galleryGrid = css`
  position: relative;
  z-index: 1;
`;
