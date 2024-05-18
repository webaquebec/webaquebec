// vendors
import React, { useEffect, useState } from 'react';
import { isAndroid, isIOS, isDesktop } from 'react-device-detect';

// images
import { useTranslation } from 'react-i18next';
import vectorPhone from '../../../../images/vectorPhone.svg';

// components
import Button from '../../../../components/Button';

// styles
import {
  ContentWrap,
  CTAWrap,
  Image,
  ImageWrap,
  Text,
  Title,
} from './CTAApp.styles';

const CTAApp = () => {
  const { t } = useTranslation();

  const [appLink, setAppLink] = useState(null);

  useEffect(() => {
    let link = 'https://app.swapcard.com/event/web-a-quebec-waq23';

    if (isAndroid) {
      link =
        'https://play.google.com/store/apps/details?id=com.swapcard.apps.android.snqc21';
    } else if (isIOS) {
      link = 'https://apps.apple.com/ca/app/waq/id1559771285?l=fr';
    }

    setAppLink(link);
  }, []);

  return (
    <CTAWrap>
      <ContentWrap>
        <Title>{t('home.ctaSection.mobileApp.duringEvent.title')}</Title>

        <Text>{t('home.ctaSection.mobileApp.duringEvent.description')}</Text>

        <Button
          to={appLink}
          tag='href'
          rel='noopener noreferrer'
          target='_blank'
          small
          animated
        >
          {isDesktop
            ? t('home.ctaSection.mobileApp.desktopCta')
            : t('home.ctaSection.mobileApp.mobileCta')}
        </Button>
      </ContentWrap>

      <ImageWrap>
        <Image src={vectorPhone} alt='' role='presentation' />
      </ImageWrap>
    </CTAWrap>
  );
};

export default CTAApp;
