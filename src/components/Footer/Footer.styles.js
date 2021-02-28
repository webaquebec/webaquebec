// vendors
import styled, { css } from 'styled-components';

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

export const HomeBlock = styled.div`
  align-self: center;

  text-align: center;
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

export const ArchiveLink = css`
  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  text-decoration: none;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${breakpointsRange(
    [{ prop: 'lineHeight', sizes: [24, 32], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;
