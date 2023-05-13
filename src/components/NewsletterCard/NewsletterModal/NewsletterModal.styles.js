// vendors
import styled, { css } from 'styled-components';

// styles
import breakpoints from '../../../styles/breakpoints';
import breakpointsRange from '../../../utils/breakpointsRange';
import { fontFamilies, fontWeights } from '../../../styles/typography';

export const NewsletterModalPaper = css`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [40, 112] },
      { prop: 'paddingRight', sizes: [30, 96] },
      { prop: 'paddingBottom', sizes: [40, 112] },
      { prop: 'paddingLeft', sizes: [30, 96] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  display: flex;
  flex-flow: column nowrap;
`;

export const NewsletterModalTitle = styled.h3`
  /* pour éviter le bouton de fermeture */
  padding-right: 64px;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 40] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction};
`;

export const NewsletterModalParagraph = styled.p`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 20] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  font-weight: ${fontWeights.medium};
  font-family: ${fontFamilies.body};
`;

export const NewsletterModalFormContainer = styled.div`
  button {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [32, 64] }],
      breakpoints.spacings,
      { bases: [16, 20] }
    )};
  }

  label {
    ${breakpointsRange(
      [{ prop: 'marginTop', sizes: [16, 32] }],
      breakpoints.spacings,
      { bases: [16, 20] }
    )};
  }
`;

export const CheckboxHelperText = styled.div`
  color: red;
`;
