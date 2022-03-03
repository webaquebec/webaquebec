// vendors
import React from 'react';

// components
import Button from '../../../../components/Button';

// styles
import { CTAIntro, CTATitle } from '../CTASection.styles';

const SpeakersCall = () => (
  <>
    <CTATitle>
      Vous aimeriez être
      <br /> <span>conférencier</span> en 2022&nbsp;?
    </CTATitle>

    <CTAIntro>
      On veut t’entendre au WAQ! Tu souhaites transmettre ton expertise sur un
      sujet qui te passionne relié au développement, à l’innovation, à la
      communication et au marketing ou au design? C’est le temps de soumettre ta
      candidature!
    </CTAIntro>

    <Button
      primary
      to='https://yr21i4wwzuv.typeform.com/to/QcCM10Cx?utm_source=website&utm_medium=homepage&utm_campaign=appel-a-conferencier&utm_id=ctp'
      tag='href'
      rel='noopener noreferrer'
      target='_blank'
      animated
    >
      Ma candidature
    </Button>
  </>
);

SpeakersCall.propTypes = {};

export default SpeakersCall;
