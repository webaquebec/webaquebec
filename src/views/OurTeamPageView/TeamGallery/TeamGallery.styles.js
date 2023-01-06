// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { lessThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';

export const TitleWrapper = styled.div`
  position: relative;

  display: inline-block;
`;

export const GalleryTitle = styled.h3`
  position: relative;
  z-index: 1;

  color: ${colors.bleu80};

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
  align-items: center;

  margin: 0 -24px 8px;
  padding: 0;
  padding-bottom: calc(0.5 * var(--container-gutter));

  overflow-x: auto;

  list-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  ::before,
  ::after {
    flex: 0 0 calc(var(--container-gutter) + 10px);

    content: '';
  }

  > * {
    flex: 0 0 calc(25% - var(--container-gutter) * 2);

    :not(:last-child) {
      margin-right: var(--container-gutter);
    }
  }

  ${lessThan(540)} {
    && > * {
      flex: 0 0 calc(45% - var(--container-gutter) * 2);
    }
  }
`;

export const GalleryItem = styled.li`
  scroll-snap-align: center;

  transition: all 200ms ease;

  ${lessThan(680)} {
    &:hover,
    &:active,
    &:focus {
      flex: 0 0 calc(70% - var(--container-gutter) * 2);
    }
  }
`;

export const galleryGrid = css`
  position: relative;
  z-index: 1;
`;
