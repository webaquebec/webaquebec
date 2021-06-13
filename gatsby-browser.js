/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// vendors
import React from 'react';
import PropTypes from 'prop-types';

// Context Provider
import { ProgramFiltersProvider } from './src/contexts/ProgramFiltersContext';
import { ModalProvider } from './src/contexts/ModalContext';

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
  </ModalProvider>
);

export const shouldUpdateScroll = ({ routerProps }) => {
  const { state } = routerProps.location;

  if (state === null) return true;

  const { disableScrollUpdate, hash, offset } = state;

  if (typeof window === 'undefined') return true;

  const anchor = document.querySelector(hash);

  if (anchor === null) return true;

  const top = anchor.getBoundingClientRect().top + window.scrollY + offset || 0;

  window.scrollTo({ top, behavior: `smooth` });

  return !disableScrollUpdate;
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
