// vendors
import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';
import Sidebar from '../../../components/LayoutSections/Sidebar/Sidebar';
import Button from '../../../components/Button';

// styles
import {
  Img,
  ImgContainer,
  SectionContainer,
  Text,
  TextContainer,
  Title,
} from './Info.styles';

// images
import imgQuebecNumerique from '../../../images/img-quebec-numerique.jpg';

const Info = () => (
  <SectionContainer>
    <Center maxWidth='1064px' gutters='var(--container-gutter)'>
      <Sidebar contentMin='328px' sideWidth='50%' space='0'>
        <div>
          <ImgContainer>
            <Img
              src={imgQuebecNumerique}
              alt='Les membres de Québec Numérique'
            />
          </ImgContainer>
          <div>
            <TextContainer>
              <Title>Québec Numérique</Title>
              <Text>
                Texte standard lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
              {
                // FIXME: Fix the link
              }
              <Button to='/' tag='href' primary small animated>
                plus d&apos;information
              </Button>
            </TextContainer>
          </div>
        </div>
      </Sidebar>
    </Center>
  </SectionContainer>
);

export default Info;
