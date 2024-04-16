export const getAuth0CurrentLanguage = (currentLanguage) => {
  if (currentLanguage.includes('fr')) {
    return 'fr-CA';
  }
  return currentLanguage;
};
