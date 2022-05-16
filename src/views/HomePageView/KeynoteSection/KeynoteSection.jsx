// vendors
import React from 'react';

// styles
import { wrapper, CardsWrapper, Title, Intro } from './KeynoteSection.styles';
import { magnifyStyle, introStyle } from '../../../styles/global';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import KeynoteCard from '../../../components/KeynoteCard';

// images
import speakerDanielLamarre from '../../../images/keynotes/speaker-daniel-lamarre.jpg';
import speakerJeanBelanger from '../../../images/keynotes/speaker-jean-belanger.jpg';
import speakerKatieMartell from '../../../images/keynotes/speaker-katie-martell.jpg';
import speakerPieraGelardi from '../../../images/keynotes/speaker-piera-gelardi.jpg';
import speakerRavyPor from '../../../images/keynotes/speaker-ravy-por.jpg';
import speakerTinaTouli from '../../../images/keynotes/speaker-tina-touli.jpg';

const KeynoteSection = () => {
  const speakers = [
    {
      firstName: 'Daniel',
      lastName: 'Lamarre',
      organization: 'Cirque du Soleil',
      detailPageUrl:
        '/programmation/la-pensee-creative-moteur-pour-linnovation-et-le-succes-en-entreprise/',
      photoUrl: speakerDanielLamarre,
      photoUrlSharp: {
        childImageSharp: {
          fixed: {
            src: speakerDanielLamarre,
            srcSet: speakerDanielLamarre,
            srcSetWebp: speakerDanielLamarre,
          },
        },
      },
    },
    {
      firstName: 'Jean',
      lastName: 'Bélanger',
      organization: 'Premier Tech',
      detailPageUrl: '/programmation/keynote-jean-belanger/',
      photoUrl: speakerJeanBelanger,
      photoUrlSharp: {
        childImageSharp: {
          fixed: {
            src: speakerJeanBelanger,
            srcSet: speakerJeanBelanger,
            srcSetWebp: speakerJeanBelanger,
          },
        },
      },
    },
    {
      firstName: 'Katie',
      lastName: 'Martell',
      organization: 'Rabble Rouser Productions',
      detailPageUrl: '/programmation/keynote-a-venir/',
      photoUrl: speakerKatieMartell,
      photoUrlSharp: {
        childImageSharp: {
          fixed: {
            src: speakerKatieMartell,
            srcSet: speakerKatieMartell,
            srcSetWebp: speakerKatieMartell,
          },
        },
      },
    },
    {
      firstName: 'Piera',
      lastName: 'Gelardi',
      organization: 'Refinery29',
      detailPageUrl: '/programmation/keynote-piera-gelardi/',
      photoUrl: speakerPieraGelardi,
      photoUrlSharp: {
        childImageSharp: {
          fixed: {
            src: speakerPieraGelardi,
            srcSet: speakerPieraGelardi,
            srcSetWebp: speakerPieraGelardi,
          },
        },
      },
    },
    {
      firstName: 'Ravy',
      lastName: 'Por',
      organization: 'KPMG Canada',
      detailPageUrl:
        '/programmation/intelligence-artificielle-lalgorithme-qui-change-votre-vie/',
      photoUrl: speakerRavyPor,
      photoUrlSharp: {
        childImageSharp: {
          fixed: {
            src: speakerRavyPor,
            srcSet: speakerRavyPor,
            srcSetWebp: speakerRavyPor,
          },
        },
      },
    },
    {
      firstName: 'Tina',
      lastName: 'Touli',
      organization: 'Tina Touli',
      detailPageUrl:
        '/programmation/blending-the-physical-and-the-digital-worlds/',
      photoUrl: speakerTinaTouli,
      photoUrlSharp: {
        childImageSharp: {
          fixed: {
            src: speakerTinaTouli,
            srcSet: speakerTinaTouli,
            srcSetWebp: speakerTinaTouli,
          },
        },
      },
    },
  ];

  return (
    <Center
      css={wrapper}
      maxWidth='var(--max-container-width)'
      gutters='16px'
      intrinsic
    >
      <Title css={magnifyStyle}>conférenciers principaux</Title>
      <Center maxWidth='640px'>
        <Intro css={introStyle}>
          Le WAQ veut vous connaître! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Intro>
      </Center>
      <CardsWrapper>
        <KeynoteCard speaker={speakers[0]} mobileRotationAngle={-5} />
        <KeynoteCard big speaker={speakers[1]} mobileRotationAngle={5} />
        <KeynoteCard speaker={speakers[2]} />
        <KeynoteCard speaker={speakers[3]} mobileRotationAngle={-10} />
        <KeynoteCard speaker={speakers[4]} />
        <KeynoteCard big speaker={speakers[5]} mobileRotationAngle={5} />
      </CardsWrapper>
      <Button tag='link' to='/programmation/2022'>
        voir la programmation
      </Button>
    </Center>
  );
};

export default KeynoteSection;
