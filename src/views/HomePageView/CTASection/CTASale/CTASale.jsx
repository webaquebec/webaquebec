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
          La prévente du WAQ bat son plein! Réserve ton billet au meilleur prix
          de l’année!
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
