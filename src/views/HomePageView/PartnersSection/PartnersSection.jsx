import React from 'react';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';
import PartnersGrid from '../../../components/PartnersGrid';

// styles
import { pixelated20Style } from '../../../styles/global';
import { SectionContainer, Title } from './PartnersSection.styles';

const PartnersSection = () => {
  return (
    <SectionContainer>
      <h2 css={hideVisually}>Partenaires</h2>

      <Center
        maxWidth='var(--max-container-width)'
        gutters='32px'
        withText
        intrinsic
      >
        <Title>
          merci aux <span css={pixelated20Style}>partenaires</span> qui rendent
          tout possible
        </Title>

        <PartnersGrid />
      </Center>
    </SectionContainer>
  );
};

PartnersSection.propTypes = {};

export default PartnersSection;
