// vendors
import React from 'react';

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

const CTAApp = () => (
  <CTAWrap>
    <ContentWrap>
      <Title>découvrez notre application</Title>

      <Text>
        Que ce soit pour faire ton horaire, réseauter, écouter les conférences,
        ou tout simplement vivre le WAQ à 100%, l’application sera ton meilleur
        compagnon pour l’événement!
      </Text>

      <Button
        to='https://app.swapcard.com/event/web-a-quebec-waq22'
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
      <Image src={vectorPhone} alt='cellphone' />
    </ImageWrap>
  </CTAWrap>
);

export default CTAApp;
