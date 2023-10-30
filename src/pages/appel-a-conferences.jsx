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

// const VideoContainer = styled.div`
//   position: relative;

//   padding-top: 56.25%;
// `;

// const Video = styled.iframe`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;

//   width: 100%;
//   height: 100%;
// `;

// const VideoWrapper = styled.div`
//   position: relative;

//   overflow-y: visible;

//   ${breakpointsRange(
//     [{ prop: 'marginBottom', sizes: [60, 130], bases: [16, 20] }],
//     breakpoints.spacings
//   )};
// `;

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

const SpeakersCall = () => (
  // const video = {
  //   src: 'https://www.youtube.com/embed/UoVLfEjkH9o',
  //   title: 'Video Player: WAQ21 - Merci aux bénévoles et aux partenaires!',
  // };
  <>
    <SEO
      title='Appel à conférences'
      description='Le Web à Québec (WAQ) est l’occasion de rassembler des professionnels, développeurs, étudiants et passionnés de l’industrie du numérique à Québec.'
    />

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
            Le Web à Québec (WAQ) est l’occasion de rassembler des
            professionnels, développeurs, étudiants et passionnés de l’industrie
            du numérique à Québec. C’est un événement créé par et pour la
            communauté se déroulant sur 3 jours, du 28 au 30 mai 2024 au
            Terminal - Port de Québec. L’une des grandes forces du WAQ est la
            qualité de ses conférences. Si vous souhaitez voir votre conférence
            affichée dans la programmation 2024 du WAQ, déposez votre
            candidature!
          </p>
        </Stack>
      </SpeakersIntro>
    </Center>

    <Container forwardedAs='div' faded>
      {/* <VideoWrapper>
          <Center maxWidth='1060px' gutters='var(--container-gutter)'>
            <VideoContainer>
              <Video
                src={video.src}
                title={video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              />
            </VideoContainer>
          </Center>
        </VideoWrapper> */}
      <Center maxWidth='850px' gutters='var(--container-gutter)'>
        <TextContent>
          <h2>À quoi ressemble une conférence au WAQ?</h2>
          <p>
            Les conférences du WAQ portent généralement sur les thèmes:
            communication et marketing, design, développement Web, innovation et
            tout autre thème intéressant et pertinent pour la communauté
            numérique. Alors, si votre conférence sort des sentiers battus,
            n’hésitez pas à nous la proposer.
          </p>
          <p>
            Les conférences sont généralement une présentation d’études de cas,
            les meilleurs conseils ou des histoires de défis surmontés sous un
            format de présentation de 45 minutes. Il est STRICTEMENT INTERDIT de
            faire des pitchs de vente sur vos produits et services.
          </p>
          <h2>Prêt à vous lancer?</h2>
          <p>Avant de déposer votre candidature, vous devez avoir :</p>
          <ul>
            <li>10 minutes de votre temps;</li>
            <li>un court paragraphe expliquant votre conférence;</li>
            <li>
              une vidéo de 1 à 3 minutes présentant votre sujet (ou une vidéo
              d’une de vos présentations).
            </li>
          </ul>
          <p>
            La vidéo peut être faite de manière très simple. C’est une façon de
            constater votre passion pour le sujet discuté, en quelques minutes.
            Alors, assurez-vous d’avoir saisi vos informations avec le plus de
            justesse possible.
          </p>
          <p>
            Vous devez soumettre autant de candidatures que de propositions de
            conférence.
          </p>
          <h2>Et ensuite?</h2>
          <p>
            Le comité de programmation étudie toutes les propositions reçues. Le
            choix des candidatures retenues est basé sur la pertinence et la
            qualité du sujet proposé. Les conférencier.ières retenu.es seront
            contacté.ées en mars 2024.
          </p>
          <p>
            En raison de la grande quantité de soumissions reçues, nous nous
            excusons à l’avance de ne pouvoir donner la raison exacte des refus.
          </p>
          <p>
            Si vous avez des questions, communiquez avec nous à l’adresse{' '}
            <a href='mailto:conferences@quebecnumerique.com'>
              conferences@quebecnumerique.com
            </a>
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
            Déposer ma candidature
          </Button>
        </Center>
      </Center>
    </Container>
  </>
);
SpeakersCall.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpeakersCall;
