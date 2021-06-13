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
  font-family: ${fontFamilies.redaction20};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
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
    justify-content: space-between;
  }
`;

export const DateListItem = styled.li`
  text-align: center;
`;

export const dateTabStyle = css`
  height: 100%;
  min-height: 75px;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};

  background-color: ${colors.white};
  border-radius: 16px;

  &&.active,
  &&:focus,
  &&:hover {
    color: ${colors.gris};
  }

  > * {
    flex-grow: 1;
  }
`;

export const dateTabTypoStyle = css`
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [20, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
