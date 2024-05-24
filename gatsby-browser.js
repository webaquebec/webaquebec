/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// vendors
import React from 'react';
import PropTypes from 'prop-types';

// contexts
import { GlobalProvider } from './src/contexts/GlobalContext';
import { ModalProvider } from './src/contexts/ModalContext';
import { ProgramFiltersProvider } from './src/contexts/ProgramFiltersContext';

// components
import Layout from './src/components/Layout/Layout';

// fonts
import './static/fonts/PPRadioGrotesk/radio-grotesk.css';
import './static/fonts/Redaction/redaction.css';
import '@fontsource/press-start-2p';
import '@fontsource/press-start-2p/400.css';
import LanguageProvider from './src/contexts/LanguageContext/LanguageContext';

// Apply Layout component to every page/template
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

// Enable Modal and Program filters on every page/template
export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    <LanguageProvider>
      <ModalProvider>
        <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
      </ModalProvider>
    </LanguageProvider>
  </GlobalProvider>
);

// Define a custom scroll behavior
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { state } = location;

  if (state === null) return true;

  const { disableScrollUpdate, hash, offset } = state;

  // Server fallback
  if (typeof window === 'undefined') return true;

  // Get anchor from page
  const anchor = document.querySelector(hash);

  if (anchor === null) {
    const currentPosition = getSavedScrollPosition(location);

    setTimeout(() => {
      window.scrollTo(...(currentPosition || [0, 0]));
    }, 0);

    return false;
  }

  // Define anchor position
  const top = anchor.getBoundingClientRect().top + window.scrollY + offset || 0;
  // Scroll to anchor position
  // window.scrollTo({ top, behavior: `smooth` });
  setTimeout(() => {
    window.scrollTo({ top, behavior: `smooth` });
  }, 0);

  return !disableScrollUpdate;
};

// Trigger an immediate page refresh to apply changes
// when a service worker has been updated in the background.
export const onServiceWorkerUpdateReady = () => window.location.reload();

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
