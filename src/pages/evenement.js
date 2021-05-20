// vendors
import React from 'react';
import styled, { css } from 'styled-components';

// components
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Tag from '../components/Tag';
import SpeakerCard from '../components/SpeakerCard';
import SectionContainer from '../components/SectionContainer';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// images
import IconArrow from '../images/IconArrow';

// styles
import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [150, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const heroWrapper = css`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [60, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const backArrow = css`
  transform: rotate3d(0, 0, 1, 180deg);
`;

const backButton = css`
  margin-right: auto;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 60], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const EventContainer = styled.div`
  width: 100%;

  background-color: ${colors.white};
  border-radius: 16px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [16, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [16, 120], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const EventTitle = styled.h1`
  color: ${colors.bleu80};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 32], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const EventDescription = styled.div`
  color: ${colors.gris90};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [22, 22], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const TagList = styled.div`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [16, 16], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const TalkSingle = () => {
  // @TODO: Temporaire, à dynamiser dans un template
  const data = {
    event: {
      date: 'mardi 15 juin',
      time: 'de 09:30 à 10:30',
      title: 'L’expédition électrON : créer une connexion émotive',
      excerpt:
        'Comment l’école peut-Le 4 avril 2018, l’ultra-marathonienne Caroline Côté a entamé l’expédition électrON, un parcours de 2000 km pour suivre le chemin de l’électricité de Natashquan jusqu’à Montréal.',
      description:
        '<p>Comment l’école peut-Le 4 avril 2018, l’ultra-marathonienne Caroline Côté a entamé l’expédition électrON, un parcours de 2000 km pour suivre le chemin de l’électricité de Natashquan jusqu’à Montréal. D’avril à juin, le public a pu découvrir l’histoire passée et actuelle de l’électricité au Québec à travers les yeux de l’aventurière. Son périple, ses découvertes et ses rencontres sur le terrain ont été diffusés durant 74 jours en temps réel sur l’ensemble des plateformes numériques de l’entreprise. Le chef de la stratégie numérique d’Hydro-Québec, Gary Ravaz, reviendra sur cette épopée incroyable.</p><p>Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>',
      room: 'design',
      type: 'talk',
      tags: ['Design UX', 'Design UI', 'Centré utilisateur'],
    },
    speaker: {
      name: 'Benoit Petit',
      job: 'Conseiller pédagogique',
      company: 'Coveo',
      picture: 'https://via.placeholder.com/100x100',
      links: [
        {
          src: 'benoit@petit.com',
          type: 'email',
        },
        {
          src: 'https://www.instagram.com/',
          type: 'instagram',
        },
        {
          src: 'https://www.linkedin.com/',
          type: 'linkedin',
        },
        {
          src: 'https://twitter.com/',
          type: 'twitter',
        },
        {
          src: 'https://recit.qc.ca/membres/benoit-petit-2/',
          type: 'website',
        },
      ],
      description:
        '<p>Lorem ipsum dolor sit amet diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p><p>Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>',
    },
  };

  return (
    <Layout>
      <SEO title={data.event.title} description={data.event.excerpt} />

      <Center
        css={heroWrapper}
        maxWidth='1064px'
        gutters='var(--container-gutter)'
        intrinsic
      >
        <Hero title='programmation' displayYear tag='p' />
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='1064px' gutters='var(--container-gutter)' intrinsic>
          <Button
            to='/programmation'
            tag='link'
            outlined
            iconFirst
            renderIcon={<IconArrow css={backArrow} />}
            css={backButton}
          >
            Retour à la programmation
          </Button>

          <EventContainer>
            <Center maxWidth='645px' gutters='var(--container-gutter)'>
              <Tag outlined>{data.event.date}</Tag>
              <Tag outlined>{data.event.time}</Tag>

              <EventTitle>{data.event.title}</EventTitle>
              <EventDescription
                dangerouslySetInnerHTML={{ __html: data.event.description }}
              />

              <Tag room={data.event.room} />
              <Tag eventType={data.event.type} />

              <TagList>
                {data.event.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </TagList>

              <SpeakerCard speaker={data.speaker} />
            </Center>
          </EventContainer>
        </Center>
      </Container>
    </Layout>
  );
};

export default TalkSingle;
