import React from 'react';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';
import PartnersGrid from '../../../components/PartnersGrid';

// styles
import Title from './PartnersSection.styles';

const PartnersSection = () => (
  <div>
    <h2 css={hideVisually}>Partenaires</h2>

    <Center
      maxWidth='var(--max-container-width)'
      gutters='32px'
      withText
      intrinsic
    >
      <Title>
        Merci à nos partenaires qui rendent possible la réalisation de cette 11
        <sup>e</sup> édition!
      </Title>

      <PartnersGrid />
    </Center>
  </div>
);

PartnersSection.propTypes = {};

export default PartnersSection;
