// vendors
import React from 'react';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import SectionContainer from '../components/SectionContainer';

// views
import Prices from '../views/WAQademyView/Prices';
import Questions from '../views/WAQademyView/Questions';
import Title from '../views/WAQademyView/Title';
import CallToAction from '../views/WAQademyView/CallToAction/CallToAction';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [{ prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] }],
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

const WAQademyPage = () => (
  <>
    <SEO
      title='WAQadémie'
      description='Des formations pour les créateur·trices du Web, guidées par les principes fondateurs du WAQ.'
    />

    <Title />

    <Container faded>
      <Questions />

      <Prices />

      <CallToAction />
    </Container>
  </>
);

export default WAQademyPage;
