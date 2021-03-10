import React from 'react';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import StatsSection from '../views/HomePageViews/StatsSection';
import HeroSection from '../views/HomePageViews/HeroSection';

// views
import PartnersGridSection from '../views/HomePageView/PartnersSection';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Accueil'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <HeroSection />

      <StatsSection />

      <PartnersGridSection />
    </Layout>
  );
};

export default IndexPage;
