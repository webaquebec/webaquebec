// vendors
import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';

// utils
import { getAuth0CurrentLanguage } from '../../utils/language';
import './i18n';

const LanguageContext = createContext({
  changeLanguage: () => {},
  auth0CurrentLanguage: '',
  t: (key) => key,
});

const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nInstance } = useTranslation();
  const [auth0CurrentLanguage, setAuth0CurrentLanguage] = useState(
    getAuth0CurrentLanguage(i18nInstance.language)
  );

  const changeLanguage = useMemo(
    () => (language) => {
      i18nInstance.changeLanguage(language);
      localStorage.setItem('language', language);
      setAuth0CurrentLanguage(getAuth0CurrentLanguage(language));
    },
    [i18nInstance]
  );

  const contextValue = useMemo(
    () => ({ changeLanguage, t, auth0CurrentLanguage }),
    [changeLanguage, t, auth0CurrentLanguage]
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      changeLanguage(savedLanguage);
    }
  }, [changeLanguage]);

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={contextValue}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
