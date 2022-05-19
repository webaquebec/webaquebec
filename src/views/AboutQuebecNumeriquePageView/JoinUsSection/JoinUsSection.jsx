// vendors
import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import Switcher from '../../../components/LayoutSections/Switcher/Switcher';

// images
import QNLogo from '../../../images/about/quebec-numerique/QuebecNumeriqueLogo.svg';

// styles
import {
  Section,
  QuebecNumeriqueLogo,
  Column,
  Title,
  Paragraph,
} from './JoinUsSection.styles';

const JoinUsSection = () => (
  <Section>
    <Center maxWidth='840px' gutters='var(--container-gutter)'>
      <Switcher threshold='750px' space='24px'>
        <div>
          <QuebecNumeriqueLogo src={QNLogo} alt='Québec Numérique' />
          <Column>
            <Title>pour nous joindre</Title>
            <Paragraph>
              L’équipe de bénévoles derrière le WAQ est supportée par Québec
              numérique. Tu as des questions ou besoin d’information? Lâche-nous
              un coup de fil ou écris-nous, on est pas gênants!
            </Paragraph>
            <Button
              small
              primary
              animated
              tag='href'
              to='https://quebecnumerique.com/nous-joindre'
            >
              en savoir plus
            </Button>
          </Column>
        </div>
      </Switcher>
    </Center>
  </Section>
);

export default JoinUsSection;
