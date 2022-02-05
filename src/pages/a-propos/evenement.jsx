// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';

// images
import vectorGrid from '../../images/vectorVideoGrid.svg';

// views
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import AboutEventSection from '../../views/AboutEventPageView/AboutEventSection';
import GallerySection from '../../views/AboutEventPageView/GallerySection';

// styles
import breakpoints from '../../styles/breakpoints';
import { h1AltStyle } from '../../styles/global';
import colors from '../../styles/colors';

const AboutTitle = styled.h1`
  color: ${colors.bleu80};
`;

const GallerySectionImg = styled(GatsbyImage)`
  max-width: 100%;

  border-radius: 12px;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [40, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const VideoContainer = styled.div`
  position: relative;

  padding-top: 56.25%;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
`;

const VectorGrid = styled.img`
  position: absolute;
  right: 0;
  bottom: -10%;
  z-index: 1;

  height: 90%;

  ${lessThan(1280)} {
    left: 20%;
  }
`;

const VideoWrapper = styled.div`
  position: relative;

  overflow-y: visible;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [80, 250], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const AboutEventPage = ({ data }) => {
  const {
    programmationSectionPicture: {
      childImageSharp: { fluid: programmationSectionPicture },
    },
    communitySectionPicture: {
      childImageSharp: { fluid: communitySectionPicture },
    },
    partnersSectionPicture: {
      childImageSharp: { fluid: partnersSectionPicture },
    },
    adaptabilitySectionPicture: {
      childImageSharp: { fluid: adaptabilitySectionPicture },
    },
    gallery: { edges: gallery },
  } = data;

  const galleryPictures = gallery.map(({ node }, index) => ({
    id: index,
    picture: node.childImageSharp.picture,
    thumbnail: node.childImageSharp.thumbnail,
  }));

  const sectionsData = [
    {
      id: 0,
      photoSrc: programmationSectionPicture,
      title: 'Une programmation unique',
      text: 'Couvrant le numérique sous toutes ses facettes, le WAQ aborde les enjeux du monde du marketing et des communications, de l’innovation, du design et du développement. Des conférencières et des conférenciers reconnu.es du Québec comme de l’international se relaient sur scène pour satisfaire la curiosité des participant.es!',
    },
    {
      id: 1,
      photoSrc: communitySectionPicture,
      title: 'Porté par la communauté',
      text: 'Créé pour et par la communauté numérique, et rendu possible grâce au dévouement d’une équipe de plus de 100 bénévoles, le WAQ s’est imposé au fil des ans comme l’événement numérique francophone de référence en Amérique du Nord. Il est chapeauté par <a href="https://quebecnumerique.com/" target="_blank" rel="noopener noreferrer">Québec numérique</a>, un organisme à but non lucratif dont la mission est de faire grandir et rayonner l’écosystème numérique du Québec.',
    },
    {
      id: 2,
      photoSrc: partnersSectionPicture,
      title: 'Merci à nos précieux partenaires',
      text: 'Le WAQ ne verrait pas le jour sans le soutien inestimable de ses nombreux partenaires. Que ce soit par leur contribution à la mise en place de l’événement ou par leur animation sur les lieux, ils nous en mettent toujours plein la vue - et les papilles gustatives 😛!',
    },
  ];

  const intro = `Le Web à Québec (WAQ) offre année après année depuis 2011 trois jours de
                 conférences et d&apos;ateliers d&apos;une qualité exceptionnelle dans
                 une ambiance festive pour les membres de l&apos;industrie du Web avides
                 de nouvelles connaissances et d&apos;opportunités.`;

  const video = {
    src: 'https://www.youtube.com/embed/UoVLfEjkH9o',
    title: 'Video Player: WAQ21 - Merci aux bénévoles et aux partenaires!',
  };

  return (
    <>
      <SEO
        title='À propos'
        description='Tout ce que tu dois savoir sur le WAQ.'
      />

      <header>
        <Center
          maxWidth='770px'
          gutters='var(--container-gutter)'
          withText
          intrinsic
        >
          <AboutTitle css={h1AltStyle}>à propos</AboutTitle>

          {/* TODO: Tabs comes here */}
        </Center>
      </header>

      <IntroSection title={`l'événement`} text={intro}>
        <VideoWrapper>
          <Center maxWidth='1280px' gutters='var(--container-gutter)'>
            <VideoContainer>
              <Video
                src={video.src}
                title={video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              />
            </VideoContainer>
          </Center>

          <VectorGrid src={vectorGrid} alt='' role='presentation' />
        </VideoWrapper>
      </IntroSection>

      <AboutEventSection items={sectionsData} />

      <GallerySection
        title='10 ans mais bien de son temps'
        pictures={galleryPictures}
      >
        <p>
          En 2021, le WAQ a su s&apos;adapter au contexte sanitaire en offrant
          une édition virtuelle qui a connu un grand succès. Preuve que les
          contraintes permettent d&apos;évoluer pour le mieux, l&apos;édition
          hybride de 2022 saura tirer le meilleur des deux mondes!
        </p>

        <GallerySectionImg fluid={adaptabilitySectionPicture} alt='' />
      </GallerySection>
    </>
  );
};

AboutEventPage.propTypes = {
  data: PropTypes.shape({
    programmationSectionPicture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
    communitySectionPicture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
    partnersSectionPicture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
    adaptabilitySectionPicture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
    gallery: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export default AboutEventPage;

export const query = graphql`
  fragment SectionPicture on File {
    childImageSharp {
      fluid(maxWidth: 734, maxHeight: 490, quality: 99) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    programmationSectionPicture: file(
      relativePath: { eq: "about/sections/section1.jpg" }
    ) {
      ...SectionPicture
    }
    communitySectionPicture: file(
      relativePath: { eq: "about/sections/section2.jpg" }
    ) {
      ...SectionPicture
    }
    partnersSectionPicture: file(
      relativePath: { eq: "about/sections/section3.jpg" }
    ) {
      ...SectionPicture
    }
    adaptabilitySectionPicture: file(
      relativePath: { eq: "about/sections/section4.jpg" }
    ) {
      ...SectionPicture
    }

    gallery: allFile(filter: { absolutePath: { regex: "//about/gallery//" } }) {
      edges {
        node {
          childImageSharp {
            picture: fluid(maxWidth: 1200, quality: 99) {
              ...GatsbyImageSharpFluid_withWebp
            }
            thumbnail: fluid(maxWidth: 372, maxHeight: 248, quality: 99) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
