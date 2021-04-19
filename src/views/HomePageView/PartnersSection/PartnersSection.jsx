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
    <SectionContainer faded>
      <h2 css={hideVisually}>Partenaires</h2>

      <Center
        maxWidth='var(--max-container-width)'
        gutters='32px'
        withText
        intrinsic
      >
        <Title>
          Merci à nos <span css={pixelated20Style}>partenaires</span> qui
          rendent possible la réalisation de cette 10<sup>e</sup> édition!
        </Title>

        <PartnersGrid />
      </Center>
    </SectionContainer>
  );
};

PartnersSection.propTypes = {};

export default PartnersSection;
