// vendors
import React from 'react';

// components
import Button from '../../../../components/Button';

// styles
import { CTAIntro, CTATitle } from '../CTASection.styles';

const Sale = () => (
  <>
    <CTATitle>Vente en cours</CTATitle>

    <CTAIntro>
      Après 2 années d’absence, le WAQ est de retour en{' '}
      <strong>mode hybride</strong>. Assiste à un événement incontournable!
    </CTAIntro>

    <Button to='/billetterie' tag='link' primary animated>
      Réserve maintenant
    </Button>
  </>
);

export default Sale;
