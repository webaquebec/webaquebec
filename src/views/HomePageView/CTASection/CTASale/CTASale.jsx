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
        <CTATitle>Réserve ta place</CTATitle>

        <CTAIntro>
          Ne manque pas la vente des billets pour la prochaine édition du WAQ.
          Viens assister à des conférences et des 5 à 7 incroyables! En plus de
          profiter des nouveautés qui seront annoncées dans les prochaines
          semaines.
        </CTAIntro>

        <Button to='/billetterie' tag='link' animated>
          Achète ton billet
        </Button>
      </div>
      <div>
        <SpeakersGraphics />
      </div>
    </div>
  </Switcher>
);

export default CTASale;
