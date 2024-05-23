// vendors
import React from 'react';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import { CTAContent, SectionContainer } from './CTASection.styles';

// import CTASpeakersCall from './CTASpeakersCall/CTASpeakersCall';
// import CTASale from './CTASale';
import CTAApp from './CTAApp';

const CTASection = () => (
  <SectionContainer>
    <h2 css={hideVisually}>Call to action</h2>

    <Center maxWidth='1080px' gutters='var(--container-gutter)'>
      <CTAContent>
        <CTAApp />
        {/* <CTASpeakersCall /> */}
        {/* <CTASale /> */}
      </CTAContent>
    </Center>
  </SectionContainer>
);
export default CTASection;
