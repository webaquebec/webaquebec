// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';

export const footerWrapperStyle = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [56, 94], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const footerTextStyle = css`
  color: ${colors.blueberry10};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 14px;

  color: ${colors.blueberry10};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Block = styled.div`
  ${footerTextStyle}
`;

export const Link = styled.a`
  /* display: block; */

  /* color: ${colors.blueberry};
  font-weight: ${fontWeights.medium}; */
  text-decoration: none;

  word-break: normal;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 117px;
`;

export const ArchivesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -40px;
  padding: 0;

  list-style: none;

  ${breakpointsRange(
    [{ prop: 'marginRight', sizes: [0, -40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ArchiveItem = styled.li`
  margin-right: 40px;
`;

export const ArchiveLink = styled.a`
  color: ${colors.blueberry10};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 12], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [16, 20], unit: '' },
    ],
    breakpoints.spacings
  )};

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const StyledFooter = styled.footer`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [60, 134], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [60, 96], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const FooterPartners = styled.div`
  display: flex;
  align-items: flex-end;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [50, 50], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const FooterLogo = styled.a`
  ${breakpointsRange(
    [
      { prop: 'marginRight', sizes: [50, 50], bases: [16, 20] },
      { prop: 'maxWidth', sizes: [100, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  img {
    max-width: 100%;
  }
`;
