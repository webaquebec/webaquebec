// vendors
import React, { useReducer } from 'react';

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

const Form = () => {
  const reducer = (state, action) => {
    const newState = { ...state };
    newState[action.type] = action.payload;
    return newState;
  };

  const [formState, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const submit = () => {
    // FIXME: do validation and send email
    // eslint-disable-next-line no-console
    console.log(formState);
  };

  return (
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
                  value={formState.firstName}
                  placeholder='prénom'
                  onChange={(e) => {
                    dispatch({ type: 'firstName', payload: e.target.value });
                  }}
                />
                <TextInputField
                  label='nom'
                  name='lastName'
                  value={formState.lastName}
                  placeholder='nom'
                  onChange={(e) => {
                    dispatch({ type: 'lastName', payload: e.target.value });
                  }}
                />
                <TextInputField
                  label='courriel'
                  name='email'
                  value={formState.email}
                  placeholder='courriel'
                  type='email'
                  onChange={(e) => {
                    dispatch({ type: 'email', payload: e.target.value });
                  }}
                />
              </Stack>
              <div>
                <TextArea
                  label='votre message'
                  name='message'
                  value={formState.message}
                  onChange={(e) => {
                    dispatch({ type: 'message', payload: e.target.value });
                  }}
                />
              </div>
            </div>
          </Switcher>
          <ButtonContainer>
            <Button small primary animated onClick={submit}>
              envoyer
            </Button>
          </ButtonContainer>
        </form>
      </Center>
    </SectionContainer>
  );
};

export default Form;
