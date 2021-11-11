import React from 'react';
import PropTypes from 'prop-types';

// components
import SEO from '../components/SEO';

// views
import Hero from '../views/HomePageView/Hero';
import StatsSection from '../views/HomePageView/StatsSection';
import PartnersGridSection from '../views/HomePageView/PartnersSection';

const IndexPage = () => {
  return (
    <>
      <SEO
        title='Le Web à Québec | 24 au 26 mai 2022'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <Hero />

      <StatsSection />

      <PartnersGridSection />
    </>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
