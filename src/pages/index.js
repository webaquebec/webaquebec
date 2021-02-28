import React from 'react';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import StatsSection from '../views/HomePageViews/StatsSection';
import HeroSection from '../views/HomePageViews/HeroSection';

// styles
import { h1Style } from '../styles/global';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Accueil'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <h1 css={h1Style}>Bienvenue au Web à Québec!</h1>

      <HeroSection />

      <StatsSection />
    </Layout>
  );
};

export default IndexPage;
