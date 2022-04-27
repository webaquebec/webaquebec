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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
        euismod dui elit lacus, gravida. Ornare purus tellus tellus pharetra.{' '}
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
