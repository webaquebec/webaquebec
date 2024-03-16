// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import Center from '../components/LayoutSections/Center';
import SEO from '../components/SEO';
import PartnersGrids from '../components/PartnersGrids';
import Button from '../components/Button/Button';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { introStyle, h1AltStyle } from '../styles/global';
import colors from '../styles/colors';

const PartnersTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.blueberry};

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
    [
      { prop: 'top', sizes: [0, 200], bases: [16, 20] },
      { prop: 'right', sizes: [0, 400], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const PartnersIntro = styled.p`
  margin-top: 1rem;
`;

const BecomePartnerCTA = styled(Button)`
  margin: 2em;
`;

const PartnersPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        plasticTexture: file(relativePath: { eq: "textures/plasticWrap.png" }) {
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <>
      <SEO
        title='Merci aux partenaires du WAQ'
        description='Les partenaires du WAQ contribuent au succès de l’événement grâce à leur soutien, leur expertise et leur créativité.'
      />

      <Center
        maxWidth='900px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <PartnersTitle css={h1AltStyle}>partenaires</PartnersTitle>
      </Center>

      <TextureWrapper>
        <GatsbyImage
          fixed={data.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <PartnersIntro css={introStyle}>
          L’équipe du WAQ tient à remercier du fond du coeur tous les
          partenaires qui s’impliquent dans l’aventure. Par leur expertise, leur
          créativité et leur soutien, ils contribuent directement au succès de
          l’événement.
        </PartnersIntro>

        <BecomePartnerCTA
          to='mailto:dominic.guay@quebecnumerique.com'
          tag='href'
          small
          animated
        >
          Devenir partenaire
        </BecomePartnerCTA>
      </Center>

      <PartnersGrids />
    </>
  );
};

PartnersPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PartnersPage;
