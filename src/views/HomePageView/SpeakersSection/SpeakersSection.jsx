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
                Le WAQ veut vous connaître! Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et magna aliqua.
              </SpeakersIntro>

              {/* @TODO: Changer pour le bon lien lorsqu'il sera disponible  */}
              <Button
                type='button'
                primary
                to='https://share.hsforms.com/13GBb7vUFSei-cYb0ZsXYTQ3p4bi'
                tag='href'
                animated
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
