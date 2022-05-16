// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Center from '../components/LayoutSections/Center';
import StyledSectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';
import PartnersGrids from '../components/PartnersGrids';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import colors from '../styles/colors';

const SectionContainer = styled(StyledSectionContainer)`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const PartnersTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.bleu80};
`;

const PartnersIntro = styled.p`
  margin-top: 1rem;
`;

const PartnersPage = () => (
  <>
    <SEO
      title='Merci aux partenaires du WAQ'
      description='Les partenaires du WAQ contribuent au succès de l’événement grâce à leur soutien, leur expertise et leur créativité.'
    />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <PartnersTitle css={h1AltStyle}>partenaires</PartnersTitle>
      <PartnersIntro css={introStyle}>
        L’équipe du WAQ tient à remercier du fond du coeur tous les partenaires
        qui s’impliquent dans l’aventure. Par leur expertise, leur créativité et
        leur soutien, ils contribuent directement au succès de l’événement.
      </PartnersIntro>
    </Center>

    <SectionContainer forwardedAs='div' faded>
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
