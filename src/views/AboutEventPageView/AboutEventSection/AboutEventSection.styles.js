// vendors
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

// utils
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';
import { fontWeights } from '../../../styles/typography';
import { linkStyle } from '../../../styles/global';

export const atRight = css`
  margin-left: auto;
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
  color: ${colors.blueberry};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 40], bases: [16, 20] },
      { prop: 'marginTop', sizes: [24, 42], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 34], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const SectionText = styled.div`
  a {
    ${linkStyle}
  }
`;

export const ArchivesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4px 40px;
  padding: 0;

  list-style: none;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [18, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(768)} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ArchiveItem = styled.li`
  /* margin-right: 40px; */
`;

export const ArchiveLink = styled.a`
  color: ${colors.blueberry10};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [16, 20], unit: '' },
    ],
    breakpoints.spacings
  )};

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
