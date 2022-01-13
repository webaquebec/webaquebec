// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import StyledSectionContainer from '../components/SectionContainer';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// views
import Hero from '../views/HomePageView/Hero';
import StatsSection from '../views/HomePageView/StatsSection';
import SpeakersSection from '../views/HomePageView/SpeakersSection';
import PartnersGridSection from '../views/HomePageView/PartnersSection';

// styles
import breakpoints from '../styles/breakpoints';

const SectionContainer = styled(StyledSectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [186, 105], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const IndexPage = () => (
  <>
    <SEO
      title='Le Web à Québec | 24 au 26 mai 2022'
      description='Le plus grand événement numérique francophone en Amérique du Nord.'
    />

    <Hero />

    <StatsSection />

    <SectionContainer forwardedAs='div' faded>
      <SpeakersSection />

      <PartnersGridSection />
    </SectionContainer>
  </>
);

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
