// vendors
import React from 'react';
import Marquee from 'react-fast-marquee';

// styles
import {
  StyledHeroSection,
  Dates,
  StarSeparator,
  MapPin,
  AddressFirstLine,
  AddressSecondLine,
} from './HeroSection.styles';

// components
import Center from '../../../components/LayoutSections/Center';

// images
import starSeparator from '../../../images/star-separator.svg';
import mapPin from '../../../images/map-pin.svg';

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <Marquee gradient={false} speed={75}>
        <StarSeparator src={starSeparator} role='presentation' alt='' />
        <Dates>15 au 17 juin 2021</Dates>
        <StarSeparator src={starSeparator} role='presentation' alt='' />
        <Dates>15 au 17 juin 2021</Dates>
      </Marquee>

      <Center maxWidth='var(--max-container-width)' gutters='50px' withText>
        <MapPin src={mapPin} role='presentation' alt='' />
        <AddressFirstLine>au coeur de la Ville de Québec</AddressFirstLine>
        <AddressSecondLine>et/ou en ligne (à suivre...)</AddressSecondLine>
      </Center>
    </StyledHeroSection>
  );
};

export default HeroSection;
