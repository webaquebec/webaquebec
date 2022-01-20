// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// components
import TextAreaField from '../../../components/TextAreaField/TextAreaField';

// styles
import breakpoints from '../../../styles/breakpoints';
import { h4Style } from '../../../styles/global';
import colors from '../../../styles/colors';

export const SectionContainer = styled.div`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [24, 57], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [176, 238], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  ${h4Style}

  margin-top: 0;

  color: ${colors.bleu80};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [16, 58], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: flex-end;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [16, 22], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const heightMobile = 160;
const heightDesktop = 212;

export const TextArea = styled(TextAreaField)`
  ${breakpointsRange(
    [
      {
        prop: 'minHeight',
        sizes: [heightMobile, heightDesktop],
        bases: [16, 20],
      },
    ],
    breakpoints.spacings
  )};

  textarea {
    resize: none;

    ${breakpointsRange(
      [
        {
          prop: 'minHeight',
          sizes: [heightMobile, heightDesktop],
          bases: [16, 20],
        },
      ],
      breakpoints.spacings
    )};
  }
`;

const spaceMobile = 4;
const spaceDesktop = 15;

export const FormContainer = styled.div`
  ${breakpointsRange(
    [
      {
        prop: 'margin',
        sizes: [-spaceMobile, -spaceDesktop],
        bases: [16, 20],
      },
    ],
    breakpoints.spacings
  )};
`;

export const TextAreaContainer = styled.div`
  ${breakpointsRange(
    [
      {
        prop: 'margin',
        sizes: [spaceMobile, spaceDesktop],
        bases: [16, 20],
      },
    ],
    breakpoints.spacings
  )};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  ${breakpointsRange(
    [
      {
        prop: 'minHeight',
        sizes: [heightMobile, heightDesktop],
        bases: [16, 20],
      },
      {
        prop: 'margin',
        sizes: [spaceMobile, spaceDesktop],
        bases: [16, 20],
      },
    ],
    breakpoints.spacings
  )};
`;
