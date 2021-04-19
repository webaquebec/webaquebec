import React from 'react';
import PropTypes from 'prop-types';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';

// views
import HeroSection from '../views/HomePageView/HeroSection';
import StatsSection from '../views/HomePageView/StatsSection';
import PartnersGridSection from '../views/HomePageView/PartnersSection';

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title='Le Web à Québec | 15 au 17 juin 2021'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <HeroSection />

      <StatsSection />

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
