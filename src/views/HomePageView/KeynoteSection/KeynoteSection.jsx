// vendors
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// styles
import { wrapper, CardsWrapper, Title, Intro } from './KeynoteSection.styles';
import { magnifyStyle, introStyle } from '../../../styles/global';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import KeynoteCard from '../../../components/KeynoteCard';

const speakersPictureQuery = graphql`
  fragment speakerPhotoFragment on File {
    childImageSharp {
      fluid(
        quality: 100
        maxWidth: 425
        duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    speakerDanielLamarre: file(
      relativePath: { eq: "keynotes/speaker-daniel-lamarre.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerJeanBelanger: file(
      relativePath: { eq: "keynotes/speaker-jean-belanger.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerKatieMartell: file(
      relativePath: { eq: "keynotes/speaker-katie-martell.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerPieraGelardi: file(
      relativePath: { eq: "keynotes/speaker-piera-gelardi.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerRavyPor: file(
      relativePath: { eq: "keynotes/speaker-ravy-por.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerTinaTouli: file(
      relativePath: { eq: "keynotes/speaker-tina-touli.jpg" }
    ) {
      ...speakerPhotoFragment
    }
  }
`;

const KeynoteSection = () => {
  const data = useStaticQuery(speakersPictureQuery);

  const {
    speakerDanielLamarre: {
      childImageSharp: { fluid: speakerDanielLamarre },
    },
    speakerJeanBelanger: {
      childImageSharp: { fluid: speakerJeanBelanger },
    },
    speakerKatieMartell: {
      childImageSharp: { fluid: speakerKatieMartell },
    },
    speakerPieraGelardi: {
      childImageSharp: { fluid: speakerPieraGelardi },
    },
    speakerRavyPor: {
      childImageSharp: { fluid: speakerRavyPor },
    },
    speakerTinaTouli: {
      childImageSharp: { fluid: speakerTinaTouli },
    },
  } = data;

  const speakers = [
    {
      firstName: 'Daniel',
      lastName: 'Lamarre',
      organization: 'Cirque du Soleil',
      detailPageUrl:
        '/programmation/la-pensee-creative-moteur-pour-linnovation-et-le-succes-en-entreprise/',
      picture: speakerDanielLamarre,
    },
    {
      firstName: 'Jean',
      lastName: 'Bélanger',
      organization: 'Premier Tech',
      detailPageUrl: '/programmation/keynote-jean-belanger/',
      picture: speakerJeanBelanger,
    },
    {
      firstName: 'Katie',
      lastName: 'Martell',
      organization: 'Rabble Rouser Productions',
      detailPageUrl:
        '/programmation/woke-washed-the-collision-of-social-movements-and-marketing/',
      picture: speakerKatieMartell,
    },
    {
      firstName: 'Piera',
      lastName: 'Gelardi',
      organization: 'Refinery29',
      detailPageUrl: '/programmation/keynote-piera-gelardi/',
      picture: speakerPieraGelardi,
    },
    {
      firstName: 'Ravy',
      lastName: 'Por',
      organization: 'KPMG Canada',
      detailPageUrl:
        '/programmation/intelligence-artificielle-lalgorithme-qui-change-votre-vie/',
      picture: speakerRavyPor,
    },
    {
      firstName: 'Tina',
      lastName: 'Touli',
      organization: 'Tina Touli',
      detailPageUrl:
        '/programmation/blending-the-physical-and-the-digital-worlds/',
      picture: speakerTinaTouli,
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
          {/* Le WAQ veut vous connaître! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. */}
        </Intro>
      </Center>

      <CardsWrapper>
        <KeynoteCard speaker={speakers[0]} big mobileRotationAngle={-5} />
        <KeynoteCard speaker={speakers[1]} mobileRotationAngle={5} />
        <KeynoteCard speaker={speakers[2]} />
        <KeynoteCard speaker={speakers[3]} mobileRotationAngle={-10} />
        <KeynoteCard speaker={speakers[4]} />
        <KeynoteCard speaker={speakers[5]} big mobileRotationAngle={5} />
      </CardsWrapper>

      <Button tag='link' to='/programmation/2022'>
        voir la programmation
      </Button>
    </Center>
  );
};

export default KeynoteSection;
