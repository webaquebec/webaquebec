import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';
import PartnersGrid from '../../../components/PartnersGrid';

// styles
import { pixelated20Style } from '../../../styles/global';
import { SectionContainer, Title } from './PartnersSection.styles';

const PartnersSection = () => {
  return (
    <SectionContainer>
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
