// vendors
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { hideVisually } from 'polished';

// components
import { Link } from 'gatsby';
import Button from '../../Button';
import TextInputField from '../../TextInputField/TextInputField';
import Checkbox from '../../Checkbox/Checkbox';
import Center from '../../LayoutSections/Center';
import Paper from '../../Paper';
import FormHelperText from '../../FormHelperText';

// styles
import colors from '../../../styles/colors';
import {
  NewsletterModalFormContainer,
  NewsletterModalPaper,
  NewsletterModalParagraph,
  NewsletterModalTitle,
} from './NewsletterModal.styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Insère ton adresse courriel')
    .email('Insère une adresse courriel valide'),
  conditions: Yup.bool().test(
    'are-accepted',
    "Tu dois accepter les conditions pour pouvoir t'abonner",
    (value) => value === true
  ),
});

const initialValues = {
  email: '',
  conditions: false,
  botField: '',
};

const genericErrorMessage = `❌ Une erreur s'est produite de notre côté. Réessaye à nouveau.<br />
                             Si le problème persiste, écrire un courriel à <a href='mailto:info@webaquebec.org'>info@webaquebec.org</a>.`;

const successMessage = `Merci de t'être abonné à l&apos;infolettre du WAQ. 💙<br /><br />Tu recevras sous peu un courriel pour confirmer ton abonnement.`;

const NewsletterModal = () => {
  const [userNotification, setUserNotification] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    if (values.botField) return false;

    const { email } = values;

    try {
      const response = await fetch(`api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { success } = await response.json();

      if (response.status >= 400 || !success) {
        throw new Error('Subscribing to the newsletter failed');
      }

      setUserNotification(successMessage);

      resetForm();
    } catch (error) {
      setUserNotification(genericErrorMessage);
      console.error(error);
    }

    return true;
  };

  return (
    <Center maxWidth='900px' gutters='var(--container-gutter)'>
      <Paper
        lightColor={colors.bleu100}
        darkColor={colors.gris30}
        rounded
        css={NewsletterModalPaper}
      >
        <NewsletterModalTitle>
          abonne toi à l&apos;infolettre
        </NewsletterModalTitle>

        <NewsletterModalParagraph>
          Pour ne rien manquer en ce qui concerne le WAQ et les diverses
          activités lui étant lié
        </NewsletterModalParagraph>

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
              <NewsletterModalFormContainer>
                <label htmlFor='input-bot-field' css={hideVisually}>
                  Only for verification. Dont fill this out:{' '}
                  <input
                    id='input-bot-field'
                    name='botField'
                    autoComplete='off'
                    onChange={handleChange}
                  />
                </label>

                <TextInputField
                  label='ton courriel'
                  placeholder='ton courriel'
                  name='email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={touched.email ? errors.email : ''}
                />

                <Checkbox
                  name='conditions'
                  css={{ color: 'white' }}
                  checked={values.conditions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <div>
                    <span>
                      Je désire recevoir des nouvelles du WAQ par courriel et je
                      consens à la{' '}
                      <Link
                        href='/politique-et-confidentialite'
                        target='_blank'
                      >
                        politique de confidentialité
                      </Link>
                    </span>
                    <FormHelperText
                      css={{ paddingLeft: '0' }}
                      error={errors.conditions && touched.conditions}
                    >
                      {touched.conditions ? errors.conditions : ''}
                    </FormHelperText>
                  </div>
                </Checkbox>

                <Button type='submit' small inverted>
                  Je m&apos;abonne!
                </Button>

                {userNotification && (
                  <div css={{ marginTop: '32px' }}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: userNotification,
                      }}
                    />
                  </div>
                )}
              </NewsletterModalFormContainer>
            </form>
          )}
        </Formik>
      </Paper>
    </Center>
  );
};

export default NewsletterModal;
