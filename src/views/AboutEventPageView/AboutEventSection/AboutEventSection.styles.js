// vendors
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

import SectionContainer from '../../../components/SectionContainer';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';
import { fontFamilies } from '../../../styles/typography';

export const atRight = css`
  margin-left: auto;
`;

export const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [{ prop: 'paddingBottom', sizes: [64, 207], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ::before {
    top: -30vh;

    height: 30vh;
  }

  ::after {
    content: none;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;

  ${breakpointsRange(
    [{ prop: 'maxWidth', sizes: [272, 732], bases: [16, 20] }],
    breakpoints.spacings
  )};

  :not(:last-child) {
    ${breakpointsRange(
      [{ prop: 'marginBottom', sizes: [64, 177], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

export const SectionPicture = styled(GatsbyImage)`
  max-width: 100%;

  border-radius: 12px;
`;

export const SectionTitle = styled.h4`
  color: ${colors.bleu80};

  font-family: ${fontFamilies.redaction};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'marginTop', sizes: [24, 42], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 34], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
