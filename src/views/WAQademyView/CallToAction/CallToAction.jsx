// vendors
import React from 'react';

// components
import Button from '../../../components/Button';
import Center from '../../../components/LayoutSections/Center';

// styles
import { ctaButtonStyle, CTATitle } from './CallToAction.styles';

const CallToAction = () => (
  <Center maxWidth='850px' gutters='var(--container-gutter)' withText intrinsic>
    <CTATitle>Tu souhaites en savoir plus?</CTATitle>

    <Button
      to='mailto:info@webaquebec.org'
      tag='href'
      primary
      animated
      rel='noopener noreferrer'
      target='_blank'
      css={ctaButtonStyle}
    >
      Écris nous
    </Button>
  </Center>
);

export default CallToAction;
