// vendors
import React from 'react';

// components
import Button from '../../../components/Button';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';

// styles
import {
  SectionContainer,
  SpeakersContent,
  SpeakersTitle,
  SpeakersIntro,
  SpeakersGraphics,
} from './SpeakersSection.styles';

const SpeakersSection = () => {
  return (
    <SectionContainer>
      <Center maxWidth='var(--max-container-width)' gutters='50px'>
        <Switcher threshold='768px' space='2rem' limit={2}>
          <div>
            <SpeakersContent>
              <SpeakersTitle>
                Vous aimeriez être <span>conférencier</span> en 2022&nbsp;?
              </SpeakersTitle>

              <SpeakersIntro>
                On veut t’entendre au WAQ! Tu souhaites transmettre ton
                expertise sur un sujet qui te passionne relié au développement,
                à l’innovation, à la communication et au marketing ou au design?
                C’est le temps de soumettre ta candidature!
              </SpeakersIntro>

              {/* @TODO: Changer pour le bon lien lorsqu'il sera disponible  */}
              <Button
                primary
                to='https://yr21i4wwzuv.typeform.com/to/QcCM10Cx?utm_source=website&utm_medium=homepage&utm_campaign=appel-a-conferencier&utm_id=ctp'
                tag='href'
                animated
                rel='noopener noreferrer'
                target='_blank'
              >
                Ma candidature
              </Button>
            </SpeakersContent>

            <SpeakersGraphics />
          </div>
        </Switcher>
      </Center>
    </SectionContainer>
  );
};

export default SpeakersSection;
