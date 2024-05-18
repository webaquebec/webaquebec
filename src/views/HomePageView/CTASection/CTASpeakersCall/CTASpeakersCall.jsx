// vendors
import React from 'react';

// components
import Button from '../../../../components/Button';
import Switcher from '../../../../components/LayoutSections/Switcher/Switcher';
import SpeakersGraphics from '../SpeakersGraphics';

// styles
import { CTAIntro, CTATitle } from '../CTASection.styles';

const CTASpeakersCall = () => (
  <Switcher threshold='855px' space='2rem' limit={2}>
    <div>
      <div>
        <CTATitle>
          Vous aimeriez être
          <br /> conférencier en 2024&nbsp;?
        </CTATitle>

        <CTAIntro>
          On veut t’entendre au WAQ! Tu souhaites transmettre ton expertise sur
          un sujet qui te passionne relié au développement, à l’innovation, à la
          communication et au marketing ou au design? C’est le temps de
          soumettre ta candidature!
        </CTAIntro>

        <Button to='/appel-a-conferences/' tag='href' animated>
          Ma candidature
        </Button>
      </div>
      <div>
        <SpeakersGraphics />
      </div>
    </div>
  </Switcher>
);

export default CTASpeakersCall;
