// vendors
import React from 'react';

// components
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/Button';
import Switcher from '../../../../components/LayoutSections/Switcher/Switcher';
import SpeakersGraphics from '../SpeakersGraphics';

// styles
import { CTAIntro, CTATitle } from '../CTASection.styles';

const CTASale = () => {
  const { t } = useTranslation();

  return (
    <Switcher threshold='855px' space='2rem' limit={2}>
      <div>
        <div>
          <CTATitle>{t('home.ctaSection.sale.title')}</CTATitle>

          <CTAIntro>{t('home.ctaSection.sale.description')}</CTAIntro>

          <Button to='/billetterie/' tag='link' animated>
            {t('home.ctaSection.sale.cta')}
          </Button>
        </div>
        <div>
          <SpeakersGraphics />
        </div>
      </div>
    </Switcher>
  );
};

export default CTASale;
