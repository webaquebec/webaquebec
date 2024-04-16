export const getCurrentLanguage = (currentLanguage) => {
  if (currentLanguage.includes('fr')) {
    return 'fr-CA';
  }
  return currentLanguage;
};
