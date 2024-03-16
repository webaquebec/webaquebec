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
          Ne manque pas la prévente des billets pour la prochaine édition du WAQ
          et inscris-toi sur la liste d’attente. Tu seras avisé dès que les
          billets seront disponibles!
        </CTAIntro>

        <Button to='/billetterie' tag='link' animated>
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
