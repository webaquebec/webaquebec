// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Button from '../components/Button';
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// views

// styles
import breakpoints from '../styles/breakpoints';
import { titleStyle, introStyle } from '../styles/global';
import Stack from '../components/LayoutSections/Stack';
import { fontFamilies, fontWeights } from '../styles/typography';
import colors from '../styles/colors';

const SpeakersTitle = styled.h1`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [60, 150], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 80], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const SpeakersIntro = styled.div`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [16, 16] }],
    breakpoints.spacings,
    { bases: [16, 20] }
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
    [{ prop: 'marginBottom', sizes: [60, 130], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Container = styled(SectionContainer)`
  padding-bottom: 0;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105] },
      { prop: 'marginBottom', sizes: [202, 242] },
    ],
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

const TextContent = styled.div`
  color: ${colors.gris100};

  h2 {
    ${breakpointsRange(
      [
        { prop: 'marginTop', sizes: [60, 90], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  p {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }
`;

const LimitDate = styled.p`
  color: ${colors.bleu};
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.redaction};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 40], bases: [16, 20] },
      { prop: 'marginTop', sizes: [60, 90], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 90], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const SpeakersCall = () => {
  const video = {
    src: 'https://www.youtube.com/embed/UoVLfEjkH9o',
    title: 'Video Player: WAQ21 - Merci aux bénévoles et aux partenaires!',
  };
  return (
    <>
      <SEO title='Appel à conférences' description='' />

      <Center
        maxWidth='1240px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <SpeakersTitle css={titleStyle}>
          <span>appel à</span> conférences
        </SpeakersTitle>
      </Center>

      <Center
        maxWidth='850px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <SpeakersIntro css={introStyle}>
          <Stack>
            <p>
              Courte intro de bienvenue. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </Stack>
        </SpeakersIntro>
      </Center>

      <Container forwardedAs='div' faded>
        <VideoWrapper>
          <Center maxWidth='1060px' gutters='var(--container-gutter)'>
            <VideoContainer>
              <Video
                src={video.src}
                title={video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              />
            </VideoContainer>
          </Center>
        </VideoWrapper>
        <Center maxWidth='850px' gutters='var(--container-gutter)'>
          <TextContent>
            <h2>Ceci est un sous-titre</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              optio perspiciatis consequatur atque nulla doloribus? Iusto
              quibusdam laudantium minima dolore odio nisi facilis voluptatum
              eius nostrum debitis, et dolorum quas!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              optio perspiciatis consequatur atque nulla doloribus? Iusto
              quibusdam laudantium minima dolore odio nisi facilis voluptatum
              eius nostrum debitis, et dolorum quas!
            </p>
            <h2>Ceci est un sous-titre</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              optio perspiciatis consequatur atque nulla doloribus? Iusto
              quibusdam laudantium minima dolore odio nisi facilis voluptatum
              eius nostrum debitis, et dolorum quas!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              optio perspiciatis consequatur atque nulla doloribus? Iusto
              quibusdam laudantium minima dolore odio nisi facilis voluptatum
              eius nostrum debitis, et dolorum quas!
            </p>
          </TextContent>

          <Center maxWidth='1060px' withText intrinsic>
            <LimitDate>Date limite, le 0 janvier 2024</LimitDate>
            <Button
              to='https://yr21i4wwzuv.typeform.com/to/vgbK9zTW'
              tag='href'
              rel='noopener noreferrer'
              target='_blank'
              animated
            >
              Poser ma candidature
            </Button>
          </Center>
        </Center>
      </Container>
    </>
  );
};

SpeakersCall.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpeakersCall;
