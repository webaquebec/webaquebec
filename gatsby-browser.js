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

export const wrapRootElement = ({ element }) => (
  <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
