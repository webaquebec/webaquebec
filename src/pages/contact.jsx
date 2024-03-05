// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';

// views
import Addresses from '../views/ContactPageView/Addresses';
import Form from '../views/ContactPageView/Form';
import Info from '../views/ContactPageView/Info';

// styles
import breakpointsRange from '../utils/breakpointsRange';
import breakpoints from '../styles/breakpoints';
import { h1AltStyle } from '../styles/global';

const ContactTitle = styled.h1`
  ${h1AltStyle};

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const StyledSection = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 184], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 68], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::before,
  ::after {
    height: 30vh;
  }

  ::before {
    top: -30vh;
  }

  ::after {
    bottom: -30vh;
  }
`;

const ContactPage = ({ data }) => {
  const picture = data?.picture?.childImageSharp?.fluid;

  return (
    <>
      <SEO title='Contact' description='Nous joindre' />

      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <ContactTitle>nous joindre</ContactTitle>
      </Center>

      <StyledSection forwardedAs='div' faded>
        <Addresses />

        <Info picture={picture} />

        <Form />
      </StyledSection>
    </>
  );
};

export default ContactPage;

ContactPage.propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  fragment TeamPicture on File {
    childImageSharp {
      fluid(
        maxWidth: 780
        maxHeight: 577
        quality: 99
        duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    picture: file(relativePath: { eq: "img-equipe-quebec-numerique.jpg" }) {
      ...TeamPicture
    }
  }
`;
