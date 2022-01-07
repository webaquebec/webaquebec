// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import AboutSection from '../views/AboutPageView/AboutSection';
import GallerySection from '../views/AboutPageView/GallerySection';
import SectionContainer from '../components/SectionContainer';
import Sticker from '../components/Sticker';

// utils
import breakpointsRange from '../utils/breakpointsRange';
import { lessThan } from '../utils/mediaQuery';

// images
import vectorGrid from '../images/vectorVideoGrid.svg';
import photoSection1 from '../images/aboutSections/section1.jpg';
import photoSection2 from '../images/aboutSections/section2.jpg';
import photoSection3 from '../images/aboutSections/section3.jpg';
import photoSection4 from '../images/aboutSections/section4.jpg';
import vectorStickerMegaphone from '../images/stickers/vectorStickerMegaphone.svg';
import vectorStickerSmiley from '../images/stickers/vectorStickerSmiley.svg';
import vectorStickerStars from '../images/stickers/vectorStickerStarsAndHourglass.svg';
import pinkEllipse from '../images/textures/pink-ellipse.svg';
import aquaEllipse from '../images/textures/aqua-ellipse.svg';
import photo1 from '../images/aboutGallery/ballons.jpg';
import photo2 from '../images/aboutGallery/benevoles-exterieur.jpg';
import photo3 from '../images/aboutGallery/conference.jpg';
import photo4 from '../images/aboutGallery/conferencier.jpg';
import photo5 from '../images/aboutGallery/fisheye.jpg';
import photo6 from '../images/aboutGallery/gros-plan-conferencier.jpg';
import photo7 from '../images/aboutGallery/libeo.jpg';
import photo8 from '../images/aboutGallery/lunch.jpg';
import photo9 from '../images/aboutGallery/social.jpg';
import photo10 from '../images/aboutGallery/waq-vert.jpg';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import colors from '../styles/colors';

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingBottom', sizes: [148, 114], bases: [16, 20] },
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

const AboutTitle = styled.h1`
  color: ${colors.bleu80};
`;

const AboutIntro = styled.p`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 160], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const VideoSectionWrapper = styled.div`
  overflow-x: hidden;
`;

const VideoSection = styled.div`
  position: relative;

  overflow-y: visible;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [80, 250], bases: [16, 20] }],
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

const VideoGrid = styled.img`
  position: absolute;
  right: 0;
  bottom: -10%;
  z-index: 1;

  height: 90%;

  ${lessThan(1280)} {
    left: 20%;
  }
`;

const atRight = css`
  margin-left: auto;
`;

const AboutSectionContainer = styled.div`
  position: relative;

  ${breakpointsRange(
    [
      { prop: 'maxWidth', sizes: [272, 732], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [64, 177], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const PinkDecoration = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const AquaDecoration = styled.img`
  position: absolute;
  top: 30%;
  left: 0;
`;

const GallerySectionImg = styled.img`
  max-width: 100%;

  border-radius: 12px;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [40, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const AboutPage = () => {
  const stickers = [
    {
      src: vectorStickerSmiley,
      size: {
        minWidth: 58,
        maxWidth: 155,
      },
      position: {
        top: '15%',
        right: '-30px',
      },
      transform: {
        rotate: {
          initial: '12deg',
          final: '0deg',
        },
      },
      zIndex: '1',
    },
    {
      src: vectorStickerMegaphone,
      size: {
        minWidth: 85,
        maxWidth: 200,
      },
      position: {
        top: '10%',
        left: '-75px',
      },
      transform: {
        rotate: {
          initial: '-11deg',
          final: '0deg',
        },
      },
      zIndex: '1',
    },
    {
      src: vectorStickerStars,
      size: {
        minWidth: 100,
        maxWidth: 330,
      },
      position: {
        top: '10%',
        left: '95%',
      },
      transform: {
        rotate: {
          initial: '-11deg',
          final: '0deg',
        },
      },
      zIndex: '1',
    },
  ];

  const sectionsData = [
    {
      id: 0,
      photoUrl: photoSection1,
      title: 'Une programmation unique',
      text:
        'Couvrant le numérique sous toutes ses facettes, le WAQ aborde les enjeux du monde du marketing et des communications, de l’innovation, du design et du développement. Des conférencières et des conférenciers reconnu.es du Québec comme de l’international se relaient sur scène pour satisfaire la curiosité des participant.es!',
    },
    {
      id: 1,
      photoUrl: photoSection2,
      title: 'Porté par la communauté',
      text:
        'Créé pour et par la communauté numérique, et rendu possible grâce au dévouement d’une équipe de plus de 100 bénévoles, le WAQ s’est imposé au fil des ans comme l’événement numérique francophone de référence en Amérique du Nord. Il est chapeauté par <a href="https://quebecnumerique.com/" target="_blank" rel="noopener noreferrer">Québec numérique</a>, un organisme à but non lucratif dont la mission est de faire grandir et rayonner l’écosystème numérique du Québec.',
    },
    {
      id: 2,
      photoUrl: photoSection3,
      title: 'Merci à nos précieux partenaires',
      text:
        'Le WAQ ne verrait pas le jour sans le soutien inestimable de ses nombreux partenaires. Que ce soit par leur contribution à la mise en place de l’événement ou par leur animation sur les lieux, ils nous en mettent toujours plein la vue - et les papilles gustatives 😛!',
    },
  ];

  const galleryPictures = [
    {
      id: 0,
      thumbnail: photo1,
      src: photo1,
    },
    {
      id: 1,
      thumbnail: photo2,
      src: photo2,
    },
    {
      id: 2,
      thumbnail: photo3,
      src: photo3,
    },
    {
      id: 3,
      thumbnail: photo4,
      src: photo4,
    },
    {
      id: 4,
      thumbnail: photo5,
      src: photo5,
    },
    {
      id: 5,
      thumbnail: photo6,
      src: photo6,
    },
    {
      id: 6,
      thumbnail: photo7,
      src: photo7,
    },
    {
      id: 7,
      thumbnail: photo8,
      src: photo8,
    },
    {
      id: 8,
      thumbnail: photo9,
      src: photo9,
    },
    {
      id: 9,
      thumbnail: photo10,
      src: photo10,
    },
  ];

  return (
    <>
      <SEO
        title='À propos'
        description='Tout ce que tu dois savoir sur le WAQ.'
      />

      <Center
        maxWidth='770px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <AboutTitle css={h1AltStyle}>à propos</AboutTitle>
        <AboutIntro css={introStyle}>
          Le Web à Québec (WAQ) offre année après année depuis 2011 trois jours
          de conférences et d&apos;ateliers d&apos;une qualité exceptionnelle
          dans une ambiance festive pour les membres de l&apos;industrie du Web
          avides de nouvelles connaissances et d&apos;opportunités.
        </AboutIntro>
      </Center>

      <VideoSectionWrapper>
        <VideoSection>
          <Center maxWidth='1280px' gutters='var(--container-gutter)'>
            <VideoContainer>
              <Video
                src='https://www.youtube.com/embed/UoVLfEjkH9o'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              />
            </VideoContainer>
          </Center>
          <VideoGrid src={vectorGrid} alt='' role='presentation' />
        </VideoSection>
      </VideoSectionWrapper>

      <Container forwardedAs='div' faded>
        <Center maxWidth='1080px' gutters='16px'>
          {sectionsData.map((section, index) => (
            <div>
              <AboutSectionContainer
                key={`section-${section.id}`}
                css={index === 1 && atRight}
              >
                <AboutSection
                  photoUrl={section.photoUrl}
                  title={section.title}
                  text={section.text}
                />
                <Sticker sticker={stickers[index]} />
              </AboutSectionContainer>
              {index === 0 && <PinkDecoration src={pinkEllipse} alt='' />}
              {index === 1 && <AquaDecoration src={aquaEllipse} alt='' />}
            </div>
          ))}
        </Center>
      </Container>

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
        <GallerySectionImg src={photoSection4} alt='' />
      </GallerySection>
    </>
  );
};

AboutPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutPage;
