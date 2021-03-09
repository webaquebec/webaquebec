// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

export const SectionContainer = styled.section``;

export const ContactTitle = styled.h2`
  margin: 0;

  text-align: center;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ContactText = styled.p`
  margin-bottom: 20px;

  text-align: center;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const MediaText = css`
  color: ${colors.gris90};
`;

export const MediaList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto 0 0;
  padding: 0;

  list-style: none;
`;

export const BlocContainer = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [32, 80] },
      { prop: 'paddingRight', sizes: [32, 80] },
      { prop: 'paddingBottom', sizes: [32, 80] },
      { prop: 'paddingLeft', sizes: [32, 80] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const ContentContainer = css`
  height: 100%;
`;
