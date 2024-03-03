// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { fontFamilies } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';
import { magnifyStyle } from '../../../styles/global';

export const SectionContainer = styled.section`
  /* FIXME: Temp fix for overflow issue on safari mobile.
    Find a better way to fix it globally */
  overflow: hidden;

  color: ${colors.blueberry};

  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [115, 210], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const CTAContent = styled.div`
  /* max-width: 500px; */
`;

export const CTATitle = styled.p`
  margin: 0;
  margin-bottom: 24px;

  ${magnifyStyle}

  span {
    font-family: ${fontFamilies.redaction10};
  }
`;

export const CTAIntro = styled.p`
  max-width: 421px;
  margin-bottom: 32px;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 18], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [26, 28], bases: [16, 18], unit: '' },
    ],
    breakpoints.spacings
  )};
`;
