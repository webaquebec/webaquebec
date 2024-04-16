// vendors
import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';

// utils
import { getCurrentLanguage } from '../../utils/language';
import './i18n';

const LanguageContext = createContext({
  changeLanguage: () => {},
  currentLanguage: '',
  t: (key) => key,
});

const LanguageProvider = ({ children }) => {
  const { t, i18n: i18nInstance } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    getCurrentLanguage(i18nInstance.language)
  );

  const changeLanguage = useMemo(
    () => (language) => {
      i18nInstance.changeLanguage(language);
      localStorage.setItem('language', language);
      setCurrentLanguage(getCurrentLanguage(language));
    },
    [i18nInstance]
  );

  const contextValue = useMemo(
    () => ({ changeLanguage, t, currentLanguage }),
    [changeLanguage, t, currentLanguage]
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
