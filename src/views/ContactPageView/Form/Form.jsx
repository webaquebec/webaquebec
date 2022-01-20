// vendors
import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import Stack from '../../../components/LayoutSections/Stack';
import Button from '../../../components/Button';

// styles
import {
  ButtonContainer,
  SectionContainer,
  TextArea,
  Title,
} from './Form.styles';
import TextInputField from '../../../components/TextInputField';

const Form = () => (
  <SectionContainer>
    <Center maxWidth='1064px' gutters='var(--container-gutter)'>
      <Title>contactez-nous</Title>
      <form>
        <Switcher threshold='700px' space='2rem' limit='2'>
          <div>
            <Stack space='1rem'>
              <TextInputField
                label='prénom'
                name='firstName'
                value=''
                placeholder='prénom'
              />
              <TextInputField
                label='nom'
                name='lastName'
                value=''
                placeholder='nom'
              />
              <TextInputField
                label='courriel'
                name='email'
                value=''
                placeholder='courriel'
                type='email'
              />
            </Stack>
            <div>
              <TextArea label='votre message' name='message' value='' />
            </div>
          </div>
        </Switcher>
        <ButtonContainer>
          <Button small primary animated>
            envoyer
          </Button>
        </ButtonContainer>
      </form>
    </Center>
  </SectionContainer>
);

export default Form;
