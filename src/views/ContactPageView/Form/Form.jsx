// vendors
import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import Stack from '../../../components/LayoutSections/Stack';
import Button from '../../../components/Button';
import TextInputField from '../../../components/TextInputField';

// utils
import stripHtmlTags from '../../../utils/strings/stripHtmlTags';

// images
import VectorLoader from '../../../images/VectorLoader';

// styles
import {
  ButtonContainer,
  ButtonContent,
  NotificationContainer,
  // RequiredFields,
  SectionContainer,
  TextArea,
  Title,
} from './Form.styles';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Insère ton prénom')
    .min(2, 'Le prénom inséré est trop court')
    .max(50, 'Le prénom inséré est trop long'),
  lastName: Yup.string()
    .required('Insère ton nom')
    .min(2, 'Le nom inséré est trop court')
    .max(50, 'Le nom inséré est trop long'),
  email: Yup.string()
    .required('Insère ton adresse courriel')
    .email('Insère une adresse courriel valide'),
  message: Yup.string().required('Insère ton message'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  botField: '',
};

// map meaningful form field ids to generic ones generated
// from the form processing service api
const fieldIdsMap = {
  firstName: 'input_1',
  lastName: 'input_3',
  email: 'input_5',
  message: 'input_6',
  botField: 'input_7',
};

const genericErrorMessage = `❌ Une erreur s'est produite de notre côté. Veuillez réessayer à nouveau.<br />
                            Si le problème persiste, veuillez écrire un courriel à <a href='mailto:info@webaquebec.org'>info@webaquebec.org</a>.`;

const API_URL = process.env.GATSBY_WP_API_URL_ROOT;

const Form = () => {
  const [userNotification, setUserNotification] = React.useState('');

  const normalizeResponse = useCallback((response) => {
    const success = response.is_valid;
    const message = success
      ? // comes wrapped in a HTML and we likely don't need that
        stripHtmlTags(response.confirmation_message)
      : // or a generic error message, so we set a fallback
        genericErrorMessage;

    const validationError = success
      ? {}
      : // We replace the keys with the prefixed version;
        // this way the request and response matches
        Object.fromEntries(
          Object.entries(response.validation_messages).map(([key, value]) => {
            const matchedKey = Object.keys(fieldIdsMap).find(
              (k) => fieldIdsMap[k] === `input_${key}`
            );
            return [matchedKey, value];
          })
        );

    return {
      success,
      message,
      validationError,
    };
  }, []);

  const handleSubmit = useCallback(
    async (values, actions) => {
      const { botField } = values;

      if (botField) return false;

      const formData = new FormData();

      Object.keys(values).forEach((key) => {
        const matchedKey = Object.values(fieldIdsMap).find(
          (value) => fieldIdsMap[key] === value
        );
        formData.append(matchedKey, values[key]);
      });

      try {
        const init = {
          method: 'POST',
          mode: 'cors',
          body: formData,
        };

        const response = await fetch(
          `${API_URL}/wp-json/gf/v2/forms/1/submissions`,
          init
        )
          .then((res) => {
            if (res.status > 400) {
              throw new Error(res.statusText);
            }

            return res.json();
          })
          .then((res) => normalizeResponse(res));

        if (response.success) {
          console.log(response.message);

          setUserNotification(response.message);

          actions.resetForm();
        }

        // display errors back from the form service api when applied
        if (response.validationError) {
          Object.keys(response.validationError).forEach((key) => {
            actions.setFieldError(key, response.validationError[key]);
          });

          console.log(response.validationError);
        }

        actions.setSubmitting(false);
      } catch (error) {
        setUserNotification(genericErrorMessage);

        actions.setSubmitting(false);

        console.error(error);
      }

      return true;
    },
    [normalizeResponse]
  );

  return (
    <SectionContainer>
      <Center maxWidth='1064px' gutters='var(--container-gutter)'>
        <Title>contacte-nous</Title>
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
            isSubmitting,
          }) => (
            <form onSubmit={formikHandleSubmit}>
              <Stack space='var(--container-gutter)'>
                <Switcher
                  threshold='780px'
                  space='calc(var(--container-gutter) * 2)'
                  limit={2}
                >
                  <div>
                    <label htmlFor='input-bot-field' css={hideVisually}>
                      Only for verification. Don’t fill this out:{' '}
                      <input
                        id='input-bot-field'
                        name='botField'
                        autoComplete='off'
                        onChange={handleChange}
                      />
                    </label>

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
                        label='ton message'
                        placeholder='ton message'
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
                  {/* <RequiredFields>Champs obligatoires</RequiredFields> */}

                  <Button
                    small
                    animated
                    type='submit'
                    onClick={() => setUserNotification('')}
                    style={{ pointerEvents: isSubmitting ? 'none' : 'auto' }}
                  >
                    <ButtonContent>
                      {isSubmitting ? (
                        <VectorLoader
                          css={`
                            width: 60%;
                          `}
                        />
                      ) : (
                        `envoyer`
                      )}
                    </ButtonContent>
                  </Button>
                </ButtonContainer>

                {userNotification && (
                  <NotificationContainer>
                    <p dangerouslySetInnerHTML={{ __html: userNotification }} />
                  </NotificationContainer>
                )}
              </Stack>
            </form>
          )}
        </Formik>
      </Center>
    </SectionContainer>
  );
};

export default Form;
