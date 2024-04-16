// vendors
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// components
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import PartnersGrids from '../components/PartnersGrids';

// views
import Hero from '../views/HomePageView/Hero';
import StatsSection from '../views/HomePageView/StatsSection';
import ExclusiveActivity from '../views/HomePageView/ExclusiveActivity';
import KeynoteSection from '../views/HomePageView/KeynoteSection';
import CTASection from '../views/HomePageView/CTASection/CTASection';

const IndexPage = () => {
  const [isAprilFirst, setIsAprilFirst] = useState(false);

  const { t } = useTranslation();

  console.log(t('home.helloThere'));

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 3, 1);
    setIsAprilFirst(
      currentDate.getMonth() === targetDate.getMonth() &&
        currentDate.getDate() === targetDate.getDate()
    );
  }, []);

  return (
    <>
      <SEO
        title='Web à Québec | 28 au 30 mai 2024'
        description='Le WAQ, c’est une communauté de passionnés qui déploie annuellement un événement numérique local de calibre international. Trois jours de conférences et de rencontres exceptionnelles.'
      />

      <Hero />

      <StatsSection />

      {isAprilFirst && <ExclusiveActivity />}

      <CTASection />

      <KeynoteSection />

      <PartnersGrids titled />
    </>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
