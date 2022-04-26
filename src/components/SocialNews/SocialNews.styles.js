// vendors
import styled, { css } from 'styled-components';

// utils
import { em } from 'polished';
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';

export const ContactTitle = styled.h2`
  margin: 0;
  margin-bottom: 16px;

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 32], bases: [18, 24], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

export const ContactText = styled.p`
  margin-bottom: 30px;

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 24], bases: [14, 16], unit: '' },
    ],
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

  @media (max-width: ${em(846)}) {
    max-width: 216px;
  }
`;

export const blockContainerStyle = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [56, 80] },
      { prop: 'paddingRight', sizes: [32, 80] },
      { prop: 'paddingBottom', sizes: [56, 80] },
      { prop: 'paddingLeft', sizes: [32, 80] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

export const ContentContainer = css`
  height: 100%;
`;
