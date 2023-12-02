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

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import AboutEventSection from '../../views/AboutEventPageView/AboutEventSection';
import GallerySection from '../../views/AboutEventPageView/GallerySection';

// styles
import breakpoints from '../../styles/breakpoints';
import { introStyle } from '../../styles/global';

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

const VideoWrapper = styled.div`
  position: relative;

  overflow-y: visible;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [80, 250], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const IntroParagraph = styled.p`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [24, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const AboutEventPage = ({ data }) => {
  const {
    // programmationSectionPicture: {
    //   childImageSharp: { fluid: programmationSectionPicture },
    // },
    // communitySectionPicture: {
    //   childImageSharp: { fluid: communitySectionPicture },
    // },
    // partnersSectionPicture: {
    //   childImageSharp: { fluid: partnersSectionPicture },
    // },
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
      // photoSrc: programmationSectionPicture,
      title: 'Une programmation unique',
      text: '<p>Couvrant le numérique sous toutes ses facettes, le WAQ propose des conférences sur la communication, le marketing, le design, le développement, l’innovation et toutautres thèmes intéressants et pertinents pour la communauté rassemblée à l’événement. Des conférencières et des conférenciers reconnu(.e)s du Québec comme de l’international se relaient sur scène pour satisfaire ta curiosité.</p>',
    },
    {
      id: 1,
      // photoSrc: communitySectionPicture,
      title: 'Un retour sur notre histoire',
      text: '<p>Après avoir vu le jour en 2010, le WAQ a su s’adapter aux dernières tendances du numérique, faire connaître son offre de conférences à l’international et même d’offrir un événement virtuel durant… l’année qu’on connaît tous. 🤷 Après tout ça, le WAQ est maintenant l’événement local de calibre international que tu connais.</p><p>Quelle est vraiment l’évolution du WAQ à travers les années? Découvre le en visitant les dernières éditions. 👇</p>',
      hasArchives: true,
    },
    {
      id: 2,
      // photoSrc: partnersSectionPicture,
      title: 'Merci à nos précieux partenaires',
      text: 'Le WAQ n’existerait pas sans le soutien inestimable de ses précieux partenaires. Que ce soit par leur contribution à la mise en place de l’événement ou par leur animation sur les lieux, ils nous en mettent toujours plein la vue - et les papilles gustatives! 😛',
    },
  ];

  const intro = `Le WAQ, c’est une communauté de passionné(e)s qui déploie annuellement un événement <strong>authentique, ludique, festif et accessible</strong>. C’est trois jours composés de conférences et de rencontres exceptionnelles.`;

  const video = {
    src: 'https://www.youtube.com/embed/34lvNZ9WW1k?si=DgYvBSX9KRdVLV8h',
    title: 'Video Player: WAQ23 - Aftermovie',
  };

  return (
    <>
      <SEO title="L'événement" description='' />

      <AboutTabs activeTabId={0} />

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
          <Center maxWidth='1064px' gutters='var(--container-gutter)'>
            <IntroParagraph css={introStyle}>
              Le Web à Québec est chapeauté par Québec numérique, un organisme à
              but non lucratif dont la mission est de former, accompagner et
              rassembler l’écosystème numérique de Québec.
            </IntroParagraph>
            <IntroParagraph css={introStyle}>
              Au WAQ, on rassemble une communauté créative, solidaire et
              stimulante. Que tu sois designer, développeur, communicateur ou au
              coeur de l’innovation, on t’invite à propager ta passion du
              numérique tant à l’échelle locale qu’internationale. Viens
              apprendre des meilleur(e)s et faire des rencontres qui changeront
              ton parcours.
            </IntroParagraph>
          </Center>
        </VideoWrapper>
      </IntroSection>

      <AboutEventSection items={sectionsData} />

      <GallerySection title='Un p’tit coup d’oeil' pictures={galleryPictures}>
        <p>Comme qu’y disent… une image vaut mille mots 🤭</p>

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
