// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

// components
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import SectionContainer from '../../components/SectionContainer';
import Center from '../../components/LayoutSections/Center';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { greaterThan } from '../../utils/mediaQuery';

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import AboutEventSection from '../../views/AboutEventPageView/AboutEventSection';
import GallerySection from '../../views/AboutEventPageView/GallerySection';

// styles
import breakpoints from '../../styles/breakpoints';
import { introStyle } from '../../styles/global';

const Container = styled(SectionContainer)`
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

const GallerySectionImg = styled(GatsbyImage)`
  max-width: 100%;

  border-radius: 12px;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [40, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(1024)} {
    width: 840px;
  }
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
  const { t } = useTranslation();

  const {
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
      title: t('about.event.section1.title'),
      text: `<p>${t('about.event.section1.text')}</p>`,
    },
    {
      id: 1,
      title: t('about.event.section2.title'),
      text: `<p>${t('about.event.section2.text')}</p>`,
      hasArchives: true,
    },
    {
      id: 2,
      title: t('about.event.section3.title'),
      text: `<p>${t('about.event.section3.text')}</p>`,
    },
  ];

  const intro = t('about.event.intro1');

  const video = {
    src: 'https://www.youtube.com/embed/34lvNZ9WW1k?si=DgYvBSX9KRdVLV8h',
    title: 'Video Player: WAQ23 - Aftermovie',
  };

  return (
    <>
      <SEO title={t('about.event.title')} description='' />

      <AboutTabs activeTabId={0} />

      <Container forwardedAs='div' faded>
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
                {t('about.event.intro2')}
              </IntroParagraph>
              <IntroParagraph css={introStyle}>
                {t('about.event.intro3')}
              </IntroParagraph>
            </Center>
          </VideoWrapper>
        </IntroSection>

        <AboutEventSection items={sectionsData} />
      </Container>

      <GallerySection
        title={t('about.event.gallery.title')}
        pictures={galleryPictures}
      >
        <p>{t('about.event.gallery.text')}</p>

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
