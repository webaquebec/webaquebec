// vendors
import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';
import Sidebar from '../../../components/LayoutSections/Sidebar/Sidebar';
import Button from '../../../components/Button';

// styles
import {
  ButtonContainer,
  InputContainer,
  FormContainer,
  SectionContainer,
  TextArea,
  TextAreaContainer,
  Title,
} from './Form.styles';
import TextInputField from '../../../components/TextInputField';

const Form = () => (
  <SectionContainer>
    <Center maxWidth='1064px' gutters='var(--container-gutter)'>
      <Title>contactez-nous</Title>
      <form>
        <Sidebar contentMin='320px' sideWidth='47%' side='left' space='0'>
          <FormContainer>
            <InputContainer>
              <TextInputField
                label='prénom'
                name='prenom'
                value=''
                type='text'
              />
              <TextInputField label='nom' name='nom' value='' type='text' />
              <TextInputField
                label='courriel'
                name='courriel'
                value=''
                type='email'
              />
            </InputContainer>
            <TextAreaContainer>
              <TextArea label='votre message' name='message' value='' />
            </TextAreaContainer>
          </FormContainer>
        </Sidebar>
        <ButtonContainer>
          <Button small primary>
            envoyer
          </Button>
        </ButtonContainer>
      </form>
    </Center>
  </SectionContainer>
);

export default Form;
