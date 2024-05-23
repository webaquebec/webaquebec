// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

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
    [{ prop: 'marginTop', sizes: [60, 110], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const TextureWrapper = styled.div`
  position: absolute;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  ${breakpointsRange(
    [{ prop: 'top', sizes: [100, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const StyledSection = styled(SectionContainer)`
  padding-bottom: 0;
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [90, 242] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  ::before {
    top: -60vh;

    height: 60vh;
  }

  ::after {
    bottom: -40vh;

    height: 40vh;
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

      <TextureWrapper>
        <GatsbyImage
          fixed={data.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

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
    plasticTexture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }),
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
        duotone: { highlight: "#EBEBEB", shadow: "#262626" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    picture: file(relativePath: { eq: "img-equipe-quebec-numerique.jpg" }) {
      ...TeamPicture
    }
    plasticTexture: file(relativePath: { eq: "textures/plasticWrap.png" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
