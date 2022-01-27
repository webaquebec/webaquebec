// vendors
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Insérez votre prénom')
    .min(2, 'Le prénom inséré est trop court')
    .max(50, 'Le prénom inséré est trop long'),
  lastName: Yup.string()
    .required('Insérez votre nom')
    .min(2, 'Le nom inséré est trop court')
    .max(50, 'Le nom inséré est trop long'),
  email: Yup.string()
    .required('Insérez votre adresse courriel')
    .email('Insérez une adresse courriel valide'),
  message: Yup.string().required('Insérez votre message'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const handleSubmit = async (values, actions) => {
  // FIXME: do validation and send email
  // eslint-disable-next-line no-console
  console.error('FIXME: Not handling form...');
  // eslint-disable-next-line no-console
  console.log(values);
  // eslint-disable-next-line no-console
  console.log(actions);
};

const Form = () => (
  <SectionContainer>
    <Center maxWidth='1064px' gutters='var(--container-gutter)'>
      <Title>contactez-nous</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit: formikHandleSubmit,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={formikHandleSubmit}>
            <Switcher threshold='700px' space='2rem' limit={2}>
              <div>
                <Stack space='1rem'>
                  <TextInputField
                    label='prénom'
                    placeholder='prénom'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName && touched.firstName}
                    helperText={touched.firstName ? errors.firstName : ''}
                  />
                  <TextInputField
                    label='nom'
                    placeholder='nom'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName && touched.lastName}
                    helperText={touched.lastName ? errors.lastName : ''}
                  />
                  <TextInputField
                    label='courriel'
                    placeholder='courriel'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={touched.email ? errors.email : ''}
                  />
                </Stack>
                <div>
                  <TextArea
                    label='votre message'
                    placeholder='votre message'
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message && touched.message}
                    helperText={touched.message ? errors.message : ''}
                  />
                </div>
              </div>
            </Switcher>
            <ButtonContainer>
              <Button small primary animated type='submit'>
                envoyer
              </Button>
            </ButtonContainer>
          </form>
        )}
      </Formik>
    </Center>
  </SectionContainer>
);

export default Form;
