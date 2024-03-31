// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const ActivityWrapper = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [100, 64], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [100, 200], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const activityImage = css`
  border: 2px solid ${colors.blueberry};
  border-radius: 16px;
`;

export const ActivityIntro = styled.p`
  color: ${colors.blueberry10};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [28, 48], bases: [16, 20] },
      { prop: 'marginTop', sizes: [32, 48], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const CTAWrapper = styled.div`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [32, 36], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
