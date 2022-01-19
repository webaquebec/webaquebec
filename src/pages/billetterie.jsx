// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// views
import Prices from '../views/TicketsView/Prices';
import CallToAction from '../views/TicketsView/CallToAction';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import colors from '../styles/colors';

const TicketsTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.bleu80};
`;

const TicketsIntro = styled.div`
  margin-top: 1rem;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [50, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 114], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 68], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::before,
  ::after {
    height: 30vh;
  }

  ::before {
    top: -30vh;
  }

  ::after {
    bottom: -30vh;
  }
`;

const TicketsPage = () => (
  <>
    <SEO
      title='Billetterie'
      description='Vivez le WAQ en mode hybride du 24 au 26 mai 2022. Réservez votre place dès maintenant!'
    />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <TicketsTitle css={h1AltStyle}>billetterie</TicketsTitle>
      <TicketsIntro css={introStyle}>
        <p>
          Chaque année, plusieurs centaines de participants ont l&apos;occasion
          d&apos;assister à des conférences et des ateliers animés par des
          personnalités reconnues du Web d&apos;ici et d&apos;ailleurs. La 11e
          édition du Web à Québec se tiendra dans une formule hybride.
        </p>
      </TicketsIntro>
    </Center>

    <Prices />

    <Container forwardedAs='div' faded>
      <CallToAction />
    </Container>
  </>
);

TicketsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketsPage;
