import React from 'react';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import StatsSection from '../views/HomePageViews/StatsSection';

// images
import vectorBackgroundTop from '../images/vectorHomeBackgroundTop.svg';
import vectorBackgroundBottom from '../images/vectorHomeBackgroundBottom.svg';
import colors from '../styles/colors';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Accueil'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      {/** Only temporarily until having a full dynamic background  */}
      <div
        css={`
          position: absolute;
          top: 0;
          left: 0;

          z-index: -1000;

          width: 100%;
          height: 100%;

          max-height: 2275px;

          background-image: url(${vectorBackgroundTop});
          background-position: 50% 50%;
          background-size: cover;

          ::after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';

            width: 100%;
            height: 40%;

            background-image: linear-gradient(
              to bottom,
              rgba(235, 235, 235, 0) 0%,
              ${colors.gris} 100%
            );
          }
        `}
      />

      <StatsSection />

      {/** Only temporarily until having a full dynamic background  */}
      <div
        css={`
          position: absolute;
          bottom: 0;
          left: 0;

          z-index: -1000;

          width: 100%;
          height: 100%;

          max-height: 1247px;

          background-image: url(${vectorBackgroundBottom});
          background-position: 50% 50%;
          background-size: cover;

          ::after {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 40%;

            background-image: linear-gradient(
              to top,
              rgba(235, 235, 235, 0) 0%,
              ${colors.gris} 100%
            );

            content: '';
          }
        `}
      />
    </Layout>
  );
};

export default IndexPage;
