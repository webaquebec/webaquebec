import * as React from 'react';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';

// styles
import { h1Style } from '../styles/global';

const IndexPage = () => {
  return (
    <Layout>
      <SEO description='Le plus grand événement numérique francophone en Amérique du Nord.' />

      <h1 css={h1Style}>Bienvenue au Web à Québec!</h1>
    </Layout>
  );
};

export default IndexPage;
