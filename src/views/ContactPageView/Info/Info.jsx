// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
// import Sidebar from '../../../components/LayoutSections/Sidebar/Sidebar';
import Button from '../../../components/Button';

// styles
import {
  Img,
  ImgContainer,
  SectionContainer,
  Text,
  TextContainer,
  TextWrapper,
  Title,
} from './Info.styles';

const Info = ({ picture }) => (
  <SectionContainer>
    <Center maxWidth='1064px' gutters='var(--container-gutter)'>
      {/* <Sidebar contentMin='328px' sideWidth='50%' space='0'> */}
      <Switcher
        threshold='780px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <div>
          <ImgContainer>
            <Img fluid={picture} alt='Les membres de Québec numérique' />
          </ImgContainer>

          <TextContainer>
            <TextWrapper>
              <Title>Québec numérique</Title>
              <Text>
                L’équipe de bénévoles derrière le WAQ est supportée par Québec
                numérique. Tu as des questions ou besoin d’information?
                Lâche-nous un coup de fil ou écris-nous, on est pas gênant.es!
              </Text>

              <Button
                to='https://quebecnumerique.com/'
                tag='href'
                target='_blank'
                rel='noreferrer'
                primary
                small
                animated
              >
                plus d&apos;information
              </Button>
            </TextWrapper>
          </TextContainer>
        </div>
        {/* </Sidebar> */}
      </Switcher>
    </Center>
  </SectionContainer>
);

export default Info;

Info.propTypes = {
  picture: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    aspecRatio: PropTypes.number,
    base64: PropTypes.string,
  }).isRequired,
};
