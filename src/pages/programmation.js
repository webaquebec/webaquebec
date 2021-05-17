// vendors
import React from 'react';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';

// views
import Hero from '../views/ProgrammationPageView/Hero';

const ProgPage = () => {
  return (
    <Layout>
      <SEO
        title='Programmation'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <Hero />
    </Layout>
  );
};

export default ProgPage;
