// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';
import colors from '../../styles/colors';

export const FooterTitle = styled.h2`
  margin-top: 0;

  color: ${colors.bleu90};
  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ContactLink = styled.a`
  display: block;

  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const LogoWrapper = styled.div`
  align-self: center;

  text-align: center;
`;

export const Logo = styled.img`
  width: 100%;
  max-height: 32px;
`;

export const ArchivesBlock = styled.div`
  color: ${colors.gris90};
`;

export const ArchivesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -40px;
  padding: 0;

  list-style: none;
`;

export const ArchiveItem = styled.li`
  margin-right: 40px;
`;

export const ArchiveLink = styled.a`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [24, 32], bases: [16, 20], unit: '' }],
    breakpoints.spacings
  )};
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
