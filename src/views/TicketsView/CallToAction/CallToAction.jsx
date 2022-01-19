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
      Joignez-vous au plus grand événement numérique francophone en Amérique du
      Nord
    </CtaTitle>
    <p css={introStyle}>
      Vous serez redirigé·e vers la billetterie{' '}
      <a
        href='https://ti.to/web-a-quebec/waq-2022'
        rel='noopener noreferrer'
        target='_blank'
      >
        Tito
      </a>{' '}
      pour effectuer la transaction.
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
