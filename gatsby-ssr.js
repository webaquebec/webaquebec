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
import Layout from './src/components/Layout/Layout';

// Apply Layout component to every page and template
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
  </ModalProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
