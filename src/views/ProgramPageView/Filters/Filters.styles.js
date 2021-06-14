// vendors
import styled from 'styled-components';

import Button from '../../../components/Button';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontFamilies, fontWeights } from '../../../styles/typography';
import { greaterThan } from '../../../utils/mediaQuery';

export const selfBreakpoints = [breakpoints[3]];

const headerHeight = '86px';

export const Container = styled.div`
  --top-position: 150px;

  position: sticky;
  top: var(--top-position, 0);

  overflow: hidden;

  background-color: ${colors.white};
  border-radius: 16px;
`;

export const Wrapper = styled.div`
  max-height: calc(100vh - (${headerHeight} + 8px));
  padding-bottom: 180px;

  overflow-x: hidden;
  overflow-y: auto;

  ${greaterThan(selfBreakpoints[0])} {
    max-height: calc(80vh - (var(--top-position, 0) - 60px));
    padding: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${headerHeight};

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [40, 40] },
      { prop: 'paddingRight', sizes: [40, 40] },
      { prop: 'paddingLeft', sizes: [40, 40] },
      { prop: 'marginBottom', sizes: [8, 8] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const Title = styled.h2`
  margin: 0;
  margin-right: 20px;

  color: ${colors.bleu80};
  font-family: ${fontFamilies.redaction35};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 24] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const ResetButton = styled.button`
  padding: 0;

  color: ${colors.gris80};
  text-decoration: underline;

  border: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16] }],
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
  color: ${colors.gris};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [20, 20], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
