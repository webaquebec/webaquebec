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
        title={`Web à Québec | ${t('home.title')}`}
        description={t('home.description')}
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
