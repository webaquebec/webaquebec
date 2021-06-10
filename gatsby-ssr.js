/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
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

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
