// vendors
import React from 'react';

// images
import vectorPhone from '../../../../images/vectorPhone.svg';

// components
import Button from '../../../../components/Button';

// style
import {
  ContentWrap,
  CTAWrap,
  Image,
  ImageWrap,
  Text,
  Title,
} from './App.styles';

const App = () => (
  <CTAWrap>
    <ContentWrap>
      <Title>découvrez notre application</Title>
      <Text>
        Que ce soit pour faire ton horaire, réseauter, écouter les conférences,
        ou tout simplement vivre le WAQ à 100%, l’application sera ton meilleur
        compagnon pour l’événement!{' '}
      </Text>
      <Button small tag='href' to='https://google.ca'>
        télécharger l&lsquo;application
      </Button>
    </ContentWrap>
    <ImageWrap>
      <Image src={vectorPhone} alt='cellphone' />
    </ImageWrap>
  </CTAWrap>
);

export default App;
