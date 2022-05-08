// vendors
import React from 'react';
import styled from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import SectionContainer from '../../components/SectionContainer';
import ImagesSection from '../../views/AboutQuebecNumeriquePageView/ImagesSection';
import JoinUsSection from '../../views/AboutQuebecNumeriquePageView/JoinUsSection';
import WhoWeAreSection from '../../views/AboutQuebecNumeriquePageView/WhoWeAreSection';

// styles
import { h1AltStyle } from '../../styles/global';
import colors from '../../styles/colors';

const AboutTitle = styled.h1`
  ${h1AltStyle}
  color: ${colors.bleu80};
`;

const AboutQuebecNumeriquePage = () => {
  const intro =
    'Synergie et partage sont l’essence de la mission de Québec numérique (QN). Plus qu’une simple organisation sans but lucratif, Québec numérique joue un rôle rassembleur auprès de l’ensemble des acteurs et actrices du numérique à Québec. Depuis 10 ans, Québec numérique s’engage à rassembler, innover, accompagner et former la communauté du numérique.';

  const description = {
    p1: 'Cette grande aventure débuta par le Web à Québec, un événement unique imaginé par des mordus du numérique qui ont eu la folle idée d’organiser un événement pour rassembler les acteurs du Web. La première édition a attiré plus de 200 personnes!',
    p2: 'Avec le succès grandissant du WAQ, l’organisation se structure officiellement. C’est la naissance de l’OBNL Québec numérique. Aujourd’hui encore, QN est au cœur du plus grand événement numérique francophone en Amérique du Nord, créé par et pour la communauté.',
  };

  const joinUs =
    'L’équipe de bénévoles derrière le WAQ est supportée par Québec numérique. Tu as des questions ou besoin d’information? Lâche-nous un coup de fil ou écris-nous, on est pas gênants!';
  // FIXME
  const joinUsLink = 'https://quebecnumerique.com/nous-joindre';

  return (
    <>
      <SEO title='Québec Numérique' description='' />

      <header>
        <Center
          maxWidth='770px'
          gutters='var(--container-gutter)'
          withText
          intrinsic
        >
          <AboutTitle>à propos</AboutTitle>

          {/* TODO: Tabs come here */}
        </Center>
      </header>

      <SectionContainer faded>
        <IntroSection title='Québec Numérique' text={intro} />
        <ImagesSection />
        <WhoWeAreSection part1={description.p1} part2={description.p2} />
        <JoinUsSection text={joinUs} link={joinUsLink} />
      </SectionContainer>
    </>
  );
};

export default AboutQuebecNumeriquePage;
