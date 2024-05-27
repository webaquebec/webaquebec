// vendors
import styled, { css } from 'styled-components';

import { hideVisually } from 'polished';
import Button from '../../../components/Button';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies } from '../../../styles/typography';
import { greaterThan } from '../../../utils/mediaQuery';

export const selfBreakpoints = [breakpoints[3]];

const headerHeight = '86px';

export const checkboxStyle = css`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [20, 18] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const Wrapper = styled.div`
  max-height: calc(100vh - (${headerHeight} + 8px));

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [12, 12] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  overflow-x: hidden;
  overflow-y: auto;

  ${greaterThan(selfBreakpoints[0])} {
    max-height: calc(80vh - (var(--top-position, 0) - 60px));
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${headerHeight};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [40, 10] },
      { prop: 'paddingRight', sizes: [40, 40] },
      { prop: 'paddingLeft', sizes: [40, 40] },
      { prop: 'marginBottom', sizes: [20, 8] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const Title = styled.h2`
  margin: 0;
  margin-right: 20px;

  color: ${colors.blueberry};
  font-family: ${fontFamilies.redaction10};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 24] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  ${greaterThan(selfBreakpoints[0])} {
    ${hideVisually}
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpointsRange(
    [
      { prop: 'gap', sizes: [12, 4] },
      { prop: 'paddingRight', sizes: [40, 40] },
      { prop: 'paddingLeft', sizes: [40, 40] },
      { prop: 'marginBottom', sizes: [40, 20] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const ResetButton = styled.button`
  padding: 0;

  color: ${colors.blueberry};
  text-decoration: underline;

  border: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 18] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  cursor: pointer;

  appearance: none;
`;

export const CTAWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;

  width: 100%;

  padding: 20px 0;
`;

export const CTAButton = styled(Button)`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [20, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
