// vendors
import React from 'react';

// components
import SEO from '../../components/SEO';

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import ImagesSection from '../../views/AboutQuebecNumeriquePageView/ImagesSection';
import JoinUsSection from '../../views/AboutQuebecNumeriquePageView/JoinUsSection';
import WhoWeAreSection from '../../views/AboutQuebecNumeriquePageView/WhoWeAreSection';

const AboutQuebecNumeriquePage = () => {
  const intro =
    'Synergie et partage sont l’essence de la mission de Québec numérique (QN). Plus qu’une simple organisation sans but lucratif, Québec numérique joue un rôle rassembleur auprès de l’ensemble des acteurs et actrices du numérique à Québec. Depuis 10 ans, Québec numérique s’engage à rassembler, innover, accompagner et former la communauté du numérique.';

  return (
    <>
      <SEO title='Québec Numérique' description='' />

      <AboutTabs activeTabId={2} />

      <IntroSection title='Québec Numérique' text={intro} />

      <ImagesSection />

      <WhoWeAreSection />

      <JoinUsSection />
    </>
  );
};

export default AboutQuebecNumeriquePage;
