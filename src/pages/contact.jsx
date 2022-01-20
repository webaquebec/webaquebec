// vendors
import React from 'react';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import StyledSection from '../components/SectionContainer';

// views
import Adresses from '../views/ContactPageView/Adresses';
import Form from '../views/ContactPageView/Form';
import Info from '../views/ContactPageView/Info';

// styles
import { fontWeights, fontFamilies } from '../styles/typography';
import breakpointsRange from '../utils/breakpointsRange';
import breakpoints from '../styles/breakpoints';
import colors from '../styles/colors';
import { introStyle } from '../styles/global';

const ContactTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.bleu80};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction35};
  ${breakpointsRange(
    [
      { prop: 'margin-top', sizes: [23, 33], bases: [16, 20] },
      { prop: 'fontSize', sizes: [40, 96], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [48, 120], bases: [40, 96], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

const ContactIntro = styled.p`
  margin-bottom: 0;
  ${breakpointsRange(
    [{ prop: 'margin-top', sizes: [16, 8], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const ContactPage = () => (
  <>
    <SEO title='Contact' description='Nous joindre' />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <ContactTitle>nous joindre</ContactTitle>
      <ContactIntro css={introStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </ContactIntro>
    </Center>

    <StyledSection faded>
      <Adresses />

      <Info />

      <Form />
    </StyledSection>
  </>
);

export default ContactPage;
