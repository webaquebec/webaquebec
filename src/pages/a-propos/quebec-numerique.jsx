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
        <WhoWeAreSection />
        <JoinUsSection />
      </SectionContainer>
    </>
  );
};

export default AboutQuebecNumeriquePage;
