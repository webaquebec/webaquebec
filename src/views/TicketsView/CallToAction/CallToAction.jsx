// vendors
import React from 'react';

// components
import Button from '../../../components/Button';
import Center from '../../../components/LayoutSections/Center';

// styles
import { ctaButtonStyle, CTATitle } from './CallToAction.styles';
import { introStyle } from '../../../styles/global';

const CallToAction = () => (
  <Center maxWidth='850px' gutters='var(--container-gutter)' withText intrinsic>
    <CTATitle>
      Joins-toi au plus grand événement numérique en Amérique du Nord
    </CTATitle>

    {/* <p css={introStyle}>
      Nos billets ne sont pas encore en vente, mais inscris-toi sur notre liste
      d’attente et nous t’enverrons un courriel dès l’ouverture de la
      billetterie.
    </p>

    <Button
      to='https://ti.to/web-a-quebec/waq23/fr'
      tag='href'
      primary
      animated
      rel='noopener noreferrer'
      target='_blank'
      css={ctaButtonStyle}
    >
      Réserver ma place
    </Button> */}

    <p css={introStyle}>
      Pour faire ton achat, tu seras redirigé.e directement vers la plateforme{' '}
      <a
        href='https://ti.to/web-a-quebec/waq23'
        rel='noopener noreferrer'
        target='_blank'
      >
        Tito
      </a>{' '}
      afin d&apos;effectuer ta transaction.
    </p>

    <Button
      to='https://ti.to/web-a-quebec/waq23'
      tag='href'
      primary
      animated
      rel='noopener noreferrer'
      target='_blank'
      css={ctaButtonStyle}
    >
      Acheter mon billet
    </Button>
  </Center>
);

export default CallToAction;
