// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies, fontWeights } from '../../../styles/typography';
import zIndexes from '../../../styles/zIndexes';
import { speed } from '../../../styles/animation';

// 480, 640, 832, 1060
export const selfBreakpoints = [480, breakpoints[1], breakpoints[3], 1060];

export const Wrapper = styled.div`
  position: sticky;
  top: 0;

  z-index: ${zIndexes.sticky};
`;

export const HeaderContent = styled(Center)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [32, 32] },
      { prop: 'paddingRight', sizes: [16, 16] },
      { prop: 'paddingBottom', sizes: [32, 32] },
      { prop: 'paddingLeft', sizes: [16, 16] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  background: linear-gradient(
      to bottom,
      var(--page-bg-color) 0,
      var(--page-bg-color) 80%,
      transparent
    )
    100%;
`;

export const StickyTitle = styled.div`
  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;

  width: 324px;
  margin-right: 1.5rem;
  padding-left: 0.5rem;

  color: ${colors.blueberry};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction10};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};

  > span {
    font-style: italic;
  }
`;

export const YearSticker = styled.img`
  width: 70px;
  margin-left: 12px;
`;

export const DateList = styled.ul`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const DateListItem = styled.li`
  text-align: center;
`;

export const dateTabStyle = css`
  min-width: 140px;
  height: 100%;

  font-weight: ${fontWeights.medium};
  text-transform: lowercase;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  background-color: ${colors.white};
  border-radius: 4px;

  &&.active,
  &&:focus,
  &&:hover {
    color: ${colors.white};

    background-color: ${colors.blueberry};
  }

  ${greaterThan(831)} {
    position: relative;

    background-color: transparent;
    border-color: transparent;

    @media (prefers-reduced-motion: no-preference) {
      transition: color ${speed.default};
    }

    will-change: color;

    &&.active {
      font-weight: ${fontWeights.ultrabold};
    }

    &&.active,
    &&:focus,
    &&:hover {
      color: ${colors.blueberry};

      background-color: transparent;
      border-color: transparent;

      &::after {
        background-color: ${colors.blueberry};
      }
    }

    &::after {
      position: absolute;
      bottom: 12px;
      left: 50%;

      display: block;
      width: calc(100% - 48px);
      height: 4px;

      background-color: transparent;
      transform: translateX(-50%);

      @media (prefers-reduced-motion: no-preference) {
        transition: background-color ${speed.default};
      }

      content: '';

      will-change: background-color;
    }
  }
`;

export const dateTabTypoStyle = css`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
