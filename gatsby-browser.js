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
import './static/fonts/Redaction/redaction.css';

// Apply Layout component to every page/template
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

// Enable Modal and Program filters on every page/template
export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    <ModalProvider>
      <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
    </ModalProvider>
  </GlobalProvider>
);

// Define a custom scroll behavior
export const shouldUpdateScroll = ({ routerProps }) => {
  const { state } = routerProps.location;

  if (state === null) return true;

  const { disableScrollUpdate, hash, offset } = state;

  // Server fallback
  if (typeof window === 'undefined') return true;

  // Get anchor from page
  const anchor = document.querySelector(hash);

  if (anchor === null) return true;

  // Define anchor position
  const top = anchor.getBoundingClientRect().top + window.scrollY + offset || 0;
  // Scroll to anchor position
  window.scrollTo({ top, behavior: `smooth` });

  return !disableScrollUpdate;
};

// Trigger an immediate page refresh to apply changes
// when a service worker has been updated in the background.
export const onServiceWorkerUpdateReady = () => window.location.reload();

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
