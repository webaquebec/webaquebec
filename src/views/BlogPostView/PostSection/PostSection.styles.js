// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';
import { contentStyle } from '../../../components/Blocks/Blocks.styles';
import { linkStyle } from '../../../styles/global';

export const stackStyle = css`
  > * {
    width: 100%;
  }

  ${breakpointsRange(
    [{ prop: '--space', sizes: [30, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};

  > p + p {
    ${breakpointsRange(
      [{ prop: '--space', sizes: [20, 30], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  > *:not(p, ul, ol),
  > *:not(p, ul, ol, h2, h3, h4, h5, h6) + * {
    ${breakpointsRange(
      [{ prop: '--space', sizes: [56, 80], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  a {
    ${linkStyle}
  }
`;

export const PublishDate = styled.p`
  ${contentStyle}

  color: ${colors.gris90};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [40, 80], bases: [16, 20] },
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const postContainerStyle = css`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [40, 80], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [40, 80], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;
