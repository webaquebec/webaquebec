// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// components
import TextAreaField from '../../../components/TextAreaField/TextAreaField';

// styles
import breakpoints from '../../../styles/breakpoints';
import { h3Style, linkStyle } from '../../../styles/global';
import colors from '../../../styles/colors';
import { fontFamilies } from '../../../styles/typography';

export const SectionContainer = styled.section`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [24, 57], bases: [16, 20] },
      // { prop: 'paddingBottom', sizes: [176, 138], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Title = styled.h2`
  ${h3Style}

  margin-top: 0;

  color: ${colors.blueberry10};
  font-family: ${fontFamilies.redaction10};

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [16, 58], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const TextArea = styled(TextAreaField)`
  height: 100%;
  min-height: 144px;

  textarea {
    resize: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;

  /* ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [16, 22], bases: [16, 20] }],
    breakpoints.spacings
  )}; */
`;

export const ButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'height', sizes: [18, 21], bases: [16, 20] },
      { prop: 'width', sizes: [62, 75], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const RequiredFields = styled.div`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ::before {
    color: ${colors.blueberry10};

    content: '*';
  }
`;

export const NotificationContainer = styled.div`
  a {
    ${linkStyle}
  }
`;
