// vendors
import React, { useEffect, useState } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';

// images
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
        <Title>découvrez notre application</Title>

        <Text>
          Que ce soit pour faire ton horaire, réseauter, écouter les
          conférences, ou tout simplement vivre le WAQ à 100%, l’application
          sera ton meilleur compagnon pour l’événement!
        </Text>

        <Button
          to={appLink}
          tag='href'
          rel='noopener noreferrer'
          target='_blank'
          small
          animated
        >
          télécharger l&lsquo;application
        </Button>
      </ContentWrap>

      <ImageWrap>
        <Image src={vectorPhone} alt='' role='presentation' />
      </ImageWrap>
    </CTAWrap>
  );
};

export default CTAApp;
