// vendors
import React from 'react';

// components
import Button from '../../../../components/Button';
import Switcher from '../../../../components/LayoutSections/Switcher/Switcher';
import SpeakersGraphics from '../SpeakersGraphics';

// styles
import { CTAIntro, CTATitle } from '../CTASection.styles';

const CTASale = () => (
  <Switcher threshold='855px' space='2rem' limit={2}>
    <div>
      <div>
        <CTATitle>Vente en cours</CTATitle>

        <CTAIntro>
          Après 2 années d’absence, le WAQ est de retour en{' '}
          <strong>mode hybride</strong>. Assiste à un événement incontournable!
        </CTAIntro>

        <Button to='/billetterie' tag='link' primary animated>
          Réserve maintenant
        </Button>
      </div>
      <div>
        <SpeakersGraphics />
      </div>
    </div>
  </Switcher>
);

export default CTASale;
