// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Center from '../components/LayoutSections/Center';
import StyledSectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';
import PartnersGrids from '../components/PartnersGrids';

// // images
// import ogImagePreSale from '../images/og/og-img-waq-22-pre-sale.jpg';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// // views
// import Prices from '../views/TicketsView/Prices';
// import CallToAction from '../views/TicketsView/CallToAction';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle } from '../styles/global';
import colors from '../styles/colors';
// import Stack from '../components/LayoutSections/Stack';

const SectionContainer = styled(StyledSectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [186, 105], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const PartnersTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.bleu80};
`;

const PartnersPage = () => (
  <>
    <SEO
      title='Billetterie'
      description='Viens vivre le WAQ en formule hybride du 24 au 26 mai 2022. Réserve ton billet dès aujourd’hui pour participer au plus grand événement numérique francophone en Amérique du Nord.'
    />

    <SectionContainer forwardedAs='div' faded>
      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <PartnersTitle css={h1AltStyle}>partenaires</PartnersTitle>
      </Center>

      <PartnersGrids hasDetails />
    </SectionContainer>
  </>
);

PartnersPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PartnersPage;
