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
  color: ${colors.blueberry};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 12], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 14px;

  color: ${colors.blueberry};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [16, 16], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const Block = styled.div`
  ${footerTextStyle}
`;

export const Link = styled.a`
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0 16px;
  max-width: 220px;
  padding: 0;

  list-style: none;
`;

export const ArchiveLink = styled.a`
  color: ${colors.blueberry};
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
  overflow: hidden;
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [200, 320], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [60, 96], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const FooterPartners = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-end;
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [20, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const FooterLogo = styled.a`
  ${breakpointsRange(
    [{ prop: 'maxWidth', sizes: [60, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};

  img {
    max-width: 100%;
  }
`;
