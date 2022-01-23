// vendors
import React from 'react';

// components
import Button from '../../../components/Button';
import Center from '../../../components/LayoutSections/Center';

// styles
import { ctaButton, CtaTitle } from './CallToAction.styles';
import { introStyle } from '../../../styles/global';

const CallToAction = () => (
  <Center maxWidth='850px' gutters='var(--container-gutter)' withText intrinsic>
    <CtaTitle>
      Joins-toi au plus grand événement numérique en Amérique du Nord
    </CtaTitle>
    <p css={introStyle}>
      Pour faire ton achat, tu seras redirigé.e directement vers la plateforme{' '}
      <a
        href='https://ti.to/web-a-quebec/waq-2022'
        rel='noopener noreferrer'
        target='_blank'
      >
        Tito
      </a>{' '}
      afin d&apos;effectuer ta transaction.
    </p>
    <Button
      to='https://ti.to/web-a-quebec/waq-2022'
      tag='href'
      primary
      animated
      rel='noopener noreferrer'
      target='_blank'
      css={ctaButton}
    >
      Acheter mon billet
    </Button>
  </Center>
);

export default CallToAction;
