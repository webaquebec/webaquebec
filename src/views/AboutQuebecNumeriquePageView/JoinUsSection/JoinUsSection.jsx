// vendors
import React from 'react';

// components
import { useTranslation } from 'react-i18next';
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import Switcher from '../../../components/LayoutSections/Switcher/Switcher';

// images
import logoQuebecNumerique from '../../../images/about/quebec-numerique/logo-quebecnumerique.svg';

// styles
import {
  Section,
  QuebecNumeriqueLogo,
  Column,
  Title,
  Paragraph,
} from './JoinUsSection.styles';

const JoinUsSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Center maxWidth='840px' gutters='var(--container-gutter)'>
        <Switcher threshold='750px' space='24px'>
          <div>
            <QuebecNumeriqueLogo
              src={logoQuebecNumerique}
              alt='Québec numérique'
            />
            <Column>
              <Title>{t('about.qn.reachUs.title')}</Title>
              <Paragraph>{t('about.qn.reachUs.text')}</Paragraph>
              <Button
                small
                secondary
                animated
                tag='href'
                to='https://quebecnumerique.com/nous-joindre'
                target='_blank'
                rel='noopener noreferrer'
              >
                {t('about.qn.reachUs.cta')}
              </Button>
            </Column>
          </div>
        </Switcher>
      </Center>
    </Section>
  );
};

export default JoinUsSection;
