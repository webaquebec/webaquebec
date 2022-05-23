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

// 480, 640, 832, 1060
export const selfBreakpoints = [480, breakpoints[1], breakpoints[3], 1060];

export const Wrapper = styled.div`
  position: sticky;
  top: 60px;
  z-index: ${zIndexes.sticky};

  padding: 32px 0;

  transform: translateY(-50%);
`;

export const HeaderContent = styled(Center)`
  display: flex;
`;

export const StickyTitle = styled.div`
  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;

  width: 320px;
  margin-right: 1.5rem;

  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction};

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

  width: 100%;
  margin: 0;
  padding: 0;

  list-style: none;

  ${greaterThan(selfBreakpoints[1])} {
    justify-content: space-evenly;
  }

  ${greaterThan(selfBreakpoints[3])} {
    justify-content: ${({ $shrunk }) =>
      $shrunk ? 'space-around' : 'space-between'};
  }
`;

export const DateListItem = styled.li`
  text-align: center;
`;

export const dateTabStyle = css`
  min-width: 125px;
  height: 100%;
  min-height: 75px;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};

  background-color: ${colors.white};
  border-radius: 4px;

  &&.active,
  &&:focus,
  &&:hover {
    color: ${colors.gris};
  }

  > * {
    flex-grow: 1;
  }

  ${greaterThan(831)} {
    position: relative;

    background-color: transparent;
    border-color: transparent;

    &&.active,
    &&:focus,
    &&:hover {
      color: ${colors.bleu80} !important;

      font-weight: ${fontWeights.bold};
      font-family: ${fontFamilies.redaction};

      background-color: transparent !important;
      border-color: transparent !important;

      &::after {
        position: absolute;
        bottom: 16px;
        left: 50%;

        display: block;
        width: calc(100% - 80px);
        height: 2px;

        background-color: ${colors.bleu80};
        transform: translateX(-50%);

        content: '';
      }
    }
  }
`;

export const dateTabTypoStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
