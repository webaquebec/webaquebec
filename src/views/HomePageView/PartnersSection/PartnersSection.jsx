import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';
import PartnersGrid from '../../../components/PartnersGrid';

// styles
import { pixelated20Style } from '../../../styles/global';
import Heading from './PartnersSection.styles';

const PartnersSection = () => {
  return (
    <Center
      as='section'
      maxWidth='var(--max-container-width)'
      gutters='32px'
      withText
      intrinsic
    >
      <Heading>
        merci aux <span css={pixelated20Style}>partenaires</span> qui rendent
        tout possible
      </Heading>

      <PartnersGrid />
    </Center>
  );
};

PartnersSection.propTypes = {};

export default PartnersSection;
