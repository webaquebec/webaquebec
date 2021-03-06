import React from 'react';
import PropTypes from 'prop-types';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';

// views
import HeroSection from '../views/HomePageView/HeroSection';
import StatsSection from '../views/HomePageView/StatsSection';
import PartnersGridSection from '../views/HomePageView/PartnersSection';
import ApplicationSection from '../views/HomePageView/ApplicationSection';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title='Accueil'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <HeroSection />

      <StatsSection />

      <ApplicationSection />

      <PartnersGridSection />
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
