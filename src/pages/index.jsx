// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import StyledSectionContainer from '../components/SectionContainer';
import PartnersGrids from '../components/PartnersGrids';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// views
import Hero from '../views/HomePageView/Hero';
import StatsSection from '../views/HomePageView/StatsSection';
// import KeynoteSection from '../views/HomePageView/KeynoteSection';
// import CTASection from '../views/HomePageView/CTASection/CTASection';

// styles
import breakpoints from '../styles/breakpoints';

const SectionContainer = styled(StyledSectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [80, 188], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const IndexPage = () => (
  <>
    <SEO
      title='Web à Québec | 28 au 30 mai 2024'
      description='Le plus grand événement numérique francophone en Amérique du Nord.'
    />

    <Hero />

    <SectionContainer forwardedAs='div' faded>
      <StatsSection />

      {/* <CTASection /> */}

      {/* <KeynoteSection /> */}

      <PartnersGrids titled />
    </SectionContainer>
  </>
);

export default IndexPage;

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
